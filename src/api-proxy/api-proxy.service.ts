import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Inject, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';

interface ResponseFormat {
  data: string;
  headers: any;
  status: number;
}

interface CacheResponse {
  response: ResponseFormat;
  hit: 'HIT' | 'MISS';
}

@Injectable()
export class ApiProxyService {
  constructor(
    private readonly httpService: HttpService,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {}

  private async setCache(key: string): Promise<CacheResponse> {
    const response = await lastValueFrom(
      this.httpService.get(`${process.env.ORIGIN}/${key}`),
    );

    const filteredHeaders = Object.fromEntries(
      Object.entries(response.headers).filter(
        ([key]) => key.toLowerCase() !== 'x-cache',
      ),
    );

    const responseValue: ResponseFormat = {
      data: response.data,
      headers: filteredHeaders,
      status: response.status,
    };

    await this.cacheManager.set(
      key,
      { ...responseValue },
      process.env.CACHE_TTL ? parseInt(process.env.CACHE_TTL) : 10000,
    );

    return { response: responseValue, hit: 'MISS' };
  }

  async getCache(key: string): Promise<CacheResponse> {
    const value = (await this.cacheManager.get(key)) as ResponseFormat;
    if (value) {
      return { response: value, hit: 'HIT' };
    }
    return await this.setCache(key);
  }
}

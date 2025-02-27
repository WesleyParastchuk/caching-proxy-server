import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Inject, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class ApiProxyService {
  constructor(
    private readonly httpService: HttpService,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {}

  private async setCache(key: string): Promise<any> {
    const response = await lastValueFrom(
      this.httpService.get(`${process.env.ORIGIN}/${key}`),
    );
    return await this.cacheManager.set(key, response.data, 300);
  }

  async getCache(key: string): Promise<any> {
    console.log('key', key);
    const value = await this.cacheManager.get(key);
    if (value) {
      return value;
    }
    return await this.setCache(key);
  }
}

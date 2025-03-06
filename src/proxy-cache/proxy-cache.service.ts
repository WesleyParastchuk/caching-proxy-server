import { Injectable } from '@nestjs/common';
import { AbstractCacheStore } from '../cache/abstraction/AbstractCacheStore';
import { lastValueFrom } from 'rxjs';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class ProxyCacheService {
  constructor(
    private readonly cacheDBService: AbstractCacheStore,
    private readonly httpService: HttpService,
  ) {}

  public async getCache<T>(key: string): Promise<T> {
    const data = await this.cacheDBService.getCache<string>(key);
    if (data) {
      return JSON.parse(data) as T;
    }
    return this.setCache<T>(key);
  }

  public async setCache<T>(key: string): Promise<T> {
    const value = await this.fetchCache(key);
    const valueString = JSON.stringify(value);
    return this.cacheDBService.setCache<T>(key, valueString);
  }

  private async fetchCache(key: string): Promise<any> {
    const response = await lastValueFrom(
      this.httpService.get(`${process.env.ORIGIN}/${key}`),
    );
    return response.data;
  }
}

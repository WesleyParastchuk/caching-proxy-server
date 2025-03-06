import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Inject, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager';
import { AbstractCacheStore } from '../abstraction/AbstractCacheStore';
import { cacheConfig } from 'src/shared/config/cache.config';

@Injectable()
export class InMemoryCacheService extends AbstractCacheStore {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {
    super();
  }

  public async getCache<T>(key: string): Promise<T | null> {
    return await this.cacheManager.get<T>(key);
  }

  public async setCache<T>(
    key: string,
    value: string,
    ttl: number = cacheConfig.ttl * 1000,
  ): Promise<T> {
    return (await this.cacheManager.set(key, value, ttl)) as T;
  }

  public async clearCache(): Promise<void> {
    await this.cacheManager.clear();
  }
}

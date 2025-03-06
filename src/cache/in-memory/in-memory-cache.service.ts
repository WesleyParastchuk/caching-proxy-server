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

  public async getCache(key: string): Promise<string | null> {
    return await this.cacheManager.get(key);
  }

  public async setCache(
    key: string,
    value: string,
    ttl: number = cacheConfig.ttl * 1000,
  ): Promise<string> {
    return await this.cacheManager.set(key, value, ttl);
  }

  public async clearCache(): Promise<void> {
    await this.cacheManager.clear();
  }
}

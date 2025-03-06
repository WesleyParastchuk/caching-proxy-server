import { RedisCacheService } from 'src/cache/redis/redis-cache.service';
import { AbstractCacheStore } from 'src/cache/abstraction/AbstractCacheStore';
import { CacheStoreType } from 'src/shared/constants/CacheStore.enum';
import { InMemoryCacheService } from 'src/cache/in-memory/in-memory-cache.service';

export function createCacheStoreService(type: CacheStoreType) {
  switch (type) {
    case CacheStoreType.REDIS:
      return {
        provide: AbstractCacheStore,
        useClass: RedisCacheService,
      };
    case CacheStoreType.IN_MEMORY:
      return {
        provide: AbstractCacheStore,
        useClass: InMemoryCacheService,
      };
    default:
      throw new Error('Invalid cache store type');
  }
}

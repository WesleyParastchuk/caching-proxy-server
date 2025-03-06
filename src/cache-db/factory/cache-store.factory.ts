import { RedisCacheService } from 'src/cache/redis/redis-cache.service';
import { AbstractCacheStore } from 'src/cache/abstraction/AbstractCacheStore';
import { CacheStore } from 'src/shared/constants/CacheStore.enum';
import { InMemoryCacheService } from 'src/cache/in-memory/in-memory-cache.service';

export function createCacheStore(type: CacheStore) {
  switch (type) {
    case CacheStore.REDIS:
      return {
        provide: AbstractCacheStore,
        useClass: RedisCacheService,
      };
    case CacheStore.IN_MEMORY:
      return {
        provide: AbstractCacheStore,
        useClass: InMemoryCacheService,
      };
    default:
      throw new Error('Invalid cache store type');
  }
}

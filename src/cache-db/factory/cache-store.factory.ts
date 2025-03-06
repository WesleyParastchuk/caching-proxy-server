import { RedisCacheService } from 'src/redis/redis-cache.service';
import { AbstractCacheStore } from 'src/shared/abstraction/AbstractCacheStore';
import { CacheStore } from 'src/shared/constants/CacheStore.enum';

export function createCacheStore(type: CacheStore) {
  switch (type) {
    case CacheStore.REDIS:
      return {
        provide: AbstractCacheStore,
        useFactory: (redisService: RedisCacheService) => redisService,
        inject: [RedisCacheService],
      };
    default:
      throw new Error('Invalid cache store type');
  }
}

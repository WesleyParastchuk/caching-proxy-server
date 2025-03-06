import { InMemoryCacheModule } from 'src/cache/in-memory/in-memory-cache.module';
import { RedisCacheModule } from 'src/cache/redis/redis-cache.module';
import { CacheStoreType } from 'src/shared/constants/CacheStore.enum';

export function createCacheStoreModule(type: CacheStoreType) {
  switch (type) {
    case CacheStoreType.REDIS:
      return RedisCacheModule;
    case CacheStoreType.IN_MEMORY:
      return InMemoryCacheModule;
    default:
      throw new Error('Invalid cache store type');
  }
}

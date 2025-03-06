import { AbstractCacheStore } from 'src/cache/abstraction/AbstractCacheStore';
import { Module } from '@nestjs/common';
import { RedisCacheModule } from '../cache/redis/redis-cache.module';
import { createCacheStore } from './factory/cache-store.factory';
import { cacheConfig } from 'src/shared/config/cache.config';
import { InMemoryCacheModule } from 'src/cache/in-memory/in-memory-cache.module';

@Module({
  imports: [RedisCacheModule, InMemoryCacheModule],
  providers: [createCacheStore(cacheConfig.type)],
  exports: [AbstractCacheStore],
})
export class CacheDbModule {}

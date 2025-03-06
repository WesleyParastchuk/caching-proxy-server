import { AbstractCacheStore } from 'src/cache/abstraction/AbstractCacheStore';
import { Module } from '@nestjs/common';
import { createCacheStoreService } from './factory/cache-store-service.factory';
import { cacheConfig } from 'src/shared/config/cache.config';
import { createCacheStoreModule } from './factory/cache-store-module.factory';

@Module({
  imports: [createCacheStoreModule(cacheConfig.type)],
  providers: [createCacheStoreService(cacheConfig.type)],
  exports: [AbstractCacheStore],
})
export class CacheDbModule {}

import { AbstractCacheStore } from 'src/shared/abstraction/AbstractCacheStore';
import { Module } from '@nestjs/common';
import { RedisModule } from '../redis/redis.module';
import { createCacheStore } from './factory/cache-store.factory';
import { CacheStore } from 'src/shared/constants/CacheStore.enum';

@Module({
  imports: [RedisModule],
  providers: [createCacheStore(CacheStore.REDIS)],
  exports: [AbstractCacheStore],
})
export class CacheDbModule {}

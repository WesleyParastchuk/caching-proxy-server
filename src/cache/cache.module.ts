import { Module } from '@nestjs/common';
import { CacheController } from './cache.controller';
import { RedisService } from 'src/redis/redis.service';
import { createCacheProvider } from './cache-provider.factory';
import { CustomRedisModule } from 'src/redis/custom-redis/custom-redis.module';

@Module({
  imports: [CustomRedisModule],
  controllers: [CacheController],
  providers: [createCacheProvider(RedisService)],
})
export class CacheModule2 {}

import { CacheDBGateway } from 'src/cache/cacheGateway';
import { Module } from '@nestjs/common';
import { RedisService } from 'src/cache-db/redis/redis.service';
import { RedisModule } from './redis/redis.module';

@Module({
  imports: [RedisModule],
  providers: [
    {
      provide: CacheDBGateway,
      useFactory: (redisService: RedisService) => redisService,
      inject: [RedisService],
    },
  ],
  exports: [CacheDBGateway],
})
export class CacheDbModule {}

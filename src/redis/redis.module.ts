import { Module } from '@nestjs/common';
import { RedisService } from './redis.service';
import { CustomRedisModule } from './custom-redis/custom-redis.module';

@Module({
  imports: [CustomRedisModule],
  providers: [RedisService],
  exports: [RedisService],
})
export class RedisModule {}

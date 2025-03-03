import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { RedisService } from './redis.service';
import { CustomRedisModule } from './custom-redis/custom-redis.module';

@Module({
  imports: [HttpModule, CustomRedisModule],
  providers: [RedisService],
  exports: [RedisService],
})
export class RedisModule {}

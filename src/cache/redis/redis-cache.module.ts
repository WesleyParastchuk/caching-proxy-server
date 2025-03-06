import { Module } from '@nestjs/common';
import { RedisCacheService } from './redis-cache.service';
import { RedisConnectionModule } from './connection/redis-connection.module';

@Module({
  imports: [RedisConnectionModule],
  providers: [RedisCacheService],
  exports: [RedisCacheService],
})
export class RedisCacheModule {}

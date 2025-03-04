import { Module } from '@nestjs/common';
import { CacheController } from './cache.controller';
import { CustomRedisModule } from 'src/redis/custom-redis/custom-redis.module';
import { HttpModule } from '@nestjs/axios';
import { CacheService } from './cache.service';

@Module({
  imports: [CustomRedisModule, HttpModule],
  controllers: [CacheController],
  providers: [CacheService],
})
export class CacheModule2 {}

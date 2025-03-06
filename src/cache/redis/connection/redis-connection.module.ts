import { RedisModule as RedisIntegrationModule } from '@nestjs-modules/ioredis';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    RedisIntegrationModule.forRoot({
      options: {
        host: process.env.REDIS_HOST || 'localhost',
        port: parseInt(process.env.REDIS_PORT as string) || 6379,
        db: parseInt(process.env.REDIS_DB as string) || 0,
      },
      type: 'single',
    }),
  ],
  exports: [RedisIntegrationModule],
})
export class RedisConnectionModule {}

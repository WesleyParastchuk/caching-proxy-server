import { RedisModule as IoRedirModule } from '@nestjs-modules/ioredis';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    IoRedirModule.forRoot({
      options: {
        host: process.env.REDIS_HOST || 'localhost',
        port: parseInt(process.env.REDIS_PORT as string) || 6379,
      },
      type: 'single',
    }),
  ],
  exports: [IoRedirModule],
})
export class CustomRedisModule {}

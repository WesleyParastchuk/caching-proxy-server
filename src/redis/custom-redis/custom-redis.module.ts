import { RedisModule as IoRedirModule } from '@nestjs-modules/ioredis';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    IoRedirModule.forRoot({
      options: {
        host: 'localhost',
        port: 6379,
      },
      type: 'single',
    }),
  ],
  exports: [IoRedirModule],
})
export class CustomRedisModule {}

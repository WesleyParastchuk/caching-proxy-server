import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CacheModule2 } from './cache/cache.module';
@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), CacheModule2],
  controllers: [],
  providers: [],
})
export class AppModule {}

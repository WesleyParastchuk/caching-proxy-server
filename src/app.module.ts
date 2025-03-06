import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ProxyCacheModule } from './proxy-cache/proxy-cache.module';
@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), ProxyCacheModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

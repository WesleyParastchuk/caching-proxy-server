import { Module } from '@nestjs/common';
import { ProxyCacheController } from './proxy-cache.controller';
import { HttpModule } from '@nestjs/axios';
import { ProxyCacheService } from './proxy-cache.service';
import { CacheDbModule } from 'src/cache/cache-db/cache-db.module';

@Module({
  imports: [HttpModule, CacheDbModule],
  controllers: [ProxyCacheController],
  providers: [ProxyCacheService],
})
export class ProxyCacheModule {}

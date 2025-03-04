import { Module } from '@nestjs/common';
import { CacheController } from './cache.controller';
import { HttpModule } from '@nestjs/axios';
import { CacheService } from './cache.service';
import { CacheDbModule } from 'src/cache-db/cache-db.module';

@Module({
  imports: [HttpModule, CacheDbModule],
  controllers: [CacheController],
  providers: [CacheService],
})
export class CacheModule2 {}

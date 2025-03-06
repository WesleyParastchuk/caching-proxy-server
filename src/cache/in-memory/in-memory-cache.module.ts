import { Module } from '@nestjs/common';
import { InMemoryCacheService } from './in-memory-cache.service';
import { InMemoryConnectionModule } from './connection/in-memory-connection.module';

@Module({
  imports: [InMemoryConnectionModule],
  providers: [InMemoryCacheService],
  exports: [InMemoryCacheService],
})
export class InMemoryCacheModule {}

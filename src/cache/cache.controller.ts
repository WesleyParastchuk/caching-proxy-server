import { Controller, Get, Param } from '@nestjs/common';
import { CacheService } from './cache.service';

@Controller()
export class CacheController {
  constructor(private readonly cacheService: CacheService) {}

  @Get('{*splash}')
  async getCache(
    @Param('splash') splash: Array<string>,
  ): Promise<string | null> {
    return this.cacheService.getCache(splash.join('/'));
  }
}

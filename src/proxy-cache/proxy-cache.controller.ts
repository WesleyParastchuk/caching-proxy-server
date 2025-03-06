import { Controller, Get, Param } from '@nestjs/common';
import { ProxyCacheService } from './proxy-cache.service';

@Controller()
export class ProxyCacheController {
  constructor(private readonly proxyCacheService: ProxyCacheService) {}

  @Get('{*splash}')
  async getCache(
    @Param('splash') splash: Array<string>,
  ): Promise<string | null> {
    return this.proxyCacheService.getCache(splash.join('/'));
  }
}

import { Controller, Get, Param } from '@nestjs/common';
import { CacheDBGateway } from './cacheGateway';

@Controller()
export class CacheController {
  constructor(private readonly cacheService: CacheDBGateway) {}

  @Get('dev/{*splash}')
  async getCache(@Param('splash') splash: Array<string>): Promise<string> {
    return this.cacheService.getCache(splash.join('/'));
  }
}

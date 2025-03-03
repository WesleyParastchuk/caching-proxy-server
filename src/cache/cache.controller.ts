import { Controller, Get, Param } from '@nestjs/common';
import { CacheGateway } from './cacheGateway';

@Controller()
export class CacheController {
  constructor(private readonly cacheService: CacheGateway) {}

  @Get('dev/{*splash}')
  async getCache(@Param('splash') splash: Array<string>): Promise<string> {
    return this.cacheService.getCache(splash.join('/'));
  }
}

import { Controller, Get, Param, Res } from '@nestjs/common';
import { ProxyCacheService } from './proxy-cache.service';
import { Response } from 'express';

@Controller()
export class ProxyCacheController {
  constructor(private readonly proxyCacheService: ProxyCacheService) {}

  @Get('{*splash}')
  async getCache(
    @Param('splash') splash: Array<string>,
    @Res() res: Response,
  ): Promise<any> {
    const cachedValue = await this.proxyCacheService.getCache<any>(
      splash.join('/'),
    );
    res.setHeader('Content-Type', 'application/json');
    res.send(cachedValue);
  }
}

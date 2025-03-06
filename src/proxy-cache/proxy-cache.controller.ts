import { Controller, Get, Req, Res } from '@nestjs/common';
import { ProxyCacheService } from './proxy-cache.service';
import { Request, Response } from 'express';

@Controller()
export class ProxyCacheController {
  constructor(private readonly proxyCacheService: ProxyCacheService) {}

  @Get('*')
  async getCache(@Req() req: Request, @Res() res: Response): Promise<any> {
    const cachedValue = await this.proxyCacheService.getCache<any>(req.url);

    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Cache-Hit', cachedValue.status);
    res.send(cachedValue.data);
  }
}

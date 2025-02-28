import { Response } from 'express';
import { ApiProxyService } from './api-proxy.service';
import { Controller, Get, Param, Res } from '@nestjs/common';

@Controller()
export class ApiProxyController {
  constructor(private readonly apiProxyService: ApiProxyService) {}

  @Get('{*splash}')
  async getCache(
    @Param('splash') splash: Array<string>,
    @Res() res: Response,
  ): Promise<void> {
    const input = Object.values(splash).join('/');
    const cachedResponse = await this.apiProxyService.getCache(input);
    const response = cachedResponse.response;

    res.set(response.headers);
    res.set('X-Cache', cachedResponse.hit);
    res.status(response.status);

    res.json(response.data);
  }
}

import { ApiProxyService } from './api-proxy.service';
import { Controller, Get, Param } from '@nestjs/common';

@Controller()
export class ApiProxyController {
  constructor(private readonly apiProxyService: ApiProxyService) {}

  @Get('{*splash}')
  async getCache(@Param('splash') splash: Array<string>): Promise<any> {
    const input = Object.values(splash).join('/');
    return await this.apiProxyService.getCache(input);
  }
}

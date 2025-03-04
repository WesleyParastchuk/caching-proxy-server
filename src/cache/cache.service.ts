import { Injectable } from '@nestjs/common';
import { CacheDBGateway } from './cacheGateway';
import { lastValueFrom } from 'rxjs';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class CacheService {
  constructor(
    private readonly cacheDBService: CacheDBGateway,
    private readonly httpService: HttpService,
  ) {}

  public async getCache(key: string): Promise<string> {
    const data = await this.cacheDBService.getCache(key);
    if (data) {
      return data;
    }
    return this.setCache(key);
  }

  public async setCache(key: string): Promise<string> {
    const value = await this.fetchCache(key);
    const valueString = JSON.stringify(value);
    return this.cacheDBService.setCache(key, valueString);
  }

  private async fetchCache(key: string): Promise<any> {
    const response = await lastValueFrom(
      this.httpService.get(`${process.env.ORIGIN}/${key}`),
    );
    return response.data;
  }
}

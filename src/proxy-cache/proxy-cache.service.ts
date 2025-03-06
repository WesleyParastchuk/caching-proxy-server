import { Injectable } from '@nestjs/common';
import { AbstractCacheStore } from '../cache/abstraction/AbstractCacheStore';
import { lastValueFrom } from 'rxjs';
import { HttpService } from '@nestjs/axios';
import { CacheResultDto } from './dto/CacheResponse.dto';
import { CacheHit } from 'src/shared/constants/CacheHit.enum';

@Injectable()
export class ProxyCacheService {
  constructor(
    private readonly cacheDBService: AbstractCacheStore,
    private readonly httpService: HttpService,
  ) {}

  public async getCache<T>(key: string): Promise<CacheResultDto<T>> {
    const data = await this.cacheDBService.getCache<string>(key);
    if (data) {
      return new CacheResultDto<T>(JSON.parse(data) as T, CacheHit.HIT);
    }
    return this.setCache<T>(key);
  }

  public async setCache<T>(key: string): Promise<CacheResultDto<T>> {
    const value = await this.fetchCache(key);
    const valueString = JSON.stringify(value);
    await this.cacheDBService.setCache<T>(key, valueString);
    return new CacheResultDto<T>(value as T, CacheHit.MISS);
  }

  private async fetchCache(key: string): Promise<any> {
    const response = await lastValueFrom(
      this.httpService.get(`${process.env.ORIGIN}/${key}`),
    );
    return response.data;
  }
}

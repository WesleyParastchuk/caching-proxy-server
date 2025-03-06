import { Injectable } from '@nestjs/common';
import { InjectRedis } from '@nestjs-modules/ioredis';
import { Redis } from 'ioredis';
import { AbstractCacheStore } from 'src/cache/abstraction/AbstractCacheStore';

@Injectable()
export class RedisCacheService extends AbstractCacheStore {
  constructor(@InjectRedis() private readonly redis: Redis) {
    super();
  }

  public async setCache<T>(
    key: string,
    value: string,
    ttl: number = parseInt(process.env.CACHE_TTL as string) || 60,
  ): Promise<T> {
    await this.redis.set(key, JSON.stringify(value), 'EX', ttl);
    return value as T;
  }

  public async getCache<T>(key: string): Promise<T | null> {
    return (await this.redis.get(key)) as T;
  }

  public async clearCache(): Promise<void> {
    await this.redis.flushdb();
  }
}

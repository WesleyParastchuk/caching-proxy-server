import { Injectable } from '@nestjs/common';
import { InjectRedis } from '@nestjs-modules/ioredis';
import { Redis } from 'ioredis';
import { AbstractCacheStore } from 'src/cache/abstraction/AbstractCacheStore';

@Injectable()
export class RedisCacheService extends AbstractCacheStore {
  constructor(@InjectRedis() private readonly redis: Redis) {
    super();
  }

  public async setCache(
    key: string,
    value: string,
    ttl: number = parseInt(process.env.CACHE_TTL as string) || 60,
  ): Promise<string> {
    await this.redis.set(key, value, 'EX', ttl);
    return value;
  }

  public async getCache(key: string): Promise<string | null> {
    return await this.redis.get(key);
  }

  public async clearCache(): Promise<void> {
    await this.redis.flushdb();
  }
}

import { Injectable } from '@nestjs/common';
import { InjectRedis } from '@nestjs-modules/ioredis';
import { Redis } from 'ioredis';
import { CacheGateway } from 'src/cache/cacheGateway';

@Injectable()
export class RedisService extends CacheGateway {
  constructor(@InjectRedis() private readonly redis: Redis) {
    super();
  }

  private async setCache<T>(key: string, ttl: number = 60): Promise<T> {
    const value = key as T;
    await this.redis.set(key, JSON.stringify(value), 'EX', ttl);
    return value;
  }

  async getCache<T>(key: string): Promise<T> {
    const data = await this.redis.get(key);
    if (data) {
      return JSON.parse(data) as T;
    }
    return this.setCache(key);
  }

  async clearCache(): Promise<void> {
    await this.redis.flushdb();
  }
}

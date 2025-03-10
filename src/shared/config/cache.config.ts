import { CacheStoreType } from '../constants/CacheStore.enum';

interface CacheConfig {
  ttl: number; // in seconds
  type: CacheStoreType;
}

export const cacheConfig: CacheConfig = {
  ttl: process.env.CACHE_TTL ? parseInt(process.env.CACHE_TTL) : 60,
  type: (process.env.CACHE_TYPE as CacheStoreType) || CacheStoreType.IN_MEMORY,
};

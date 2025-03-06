import { CacheStore } from '../constants/CacheStore.enum';

interface CacheConfig {
  ttl: number; // in seconds
  type: CacheStore;
}

export const cacheConfig: CacheConfig = {
  ttl: process.env.CACHE_TTL ? parseInt(process.env.CACHE_TTL) : 60,
  type: CacheStore.IN_MEMORY,
};

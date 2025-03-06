export abstract class AbstractCacheStore {
  public abstract getCache<T>(key: string): Promise<T | null>;
  public abstract setCache<T>(
    key: string,
    value: string,
    ttl?: number,
  ): Promise<T>;
  public abstract clearCache(): Promise<void>;
}

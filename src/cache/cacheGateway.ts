export abstract class CacheDBGateway {
  public abstract getCache(key: string): Promise<string | null>;
  public abstract setCache(
    key: string,
    value: string,
    ttl?: number,
  ): Promise<string>;
  public abstract clearCache(): Promise<void>;
}

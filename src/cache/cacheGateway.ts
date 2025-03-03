export abstract class CacheGateway {
  public abstract getCache<T>(key: string): Promise<T>;
  public abstract clearCache(): Promise<void>;
}

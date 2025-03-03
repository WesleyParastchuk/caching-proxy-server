import { Provider, Type } from '@nestjs/common';
import { CacheGateway } from './cacheGateway';

export function createCacheProvider<T extends CacheGateway>(
  service: Type<T>,
): Provider<CacheGateway> {
  return {
    provide: CacheGateway,
    useClass: service,
  };
}

import { CacheHit } from 'src/shared/constants/CacheHit.enum';

export class CacheResultDto<T> {
  constructor(
    public readonly data: T,
    public readonly status: CacheHit,
  ) {}
}

import { CacheHit } from 'src/shared/constants/CacheHit.enum';

export class CacheResult<T> {
  data: T;
  status: CacheHit;

  constructor(data: T, status: CacheHit) {
    this.data = data;
    this.status = status;
  }
}

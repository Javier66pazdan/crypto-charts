import { TestBed } from '@angular/core/testing';

import { CryptoLoadingInterceptor } from './crypto-loading.interceptor';

describe('CryptoLoadingInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      CryptoLoadingInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: CryptoLoadingInterceptor = TestBed.inject(CryptoLoadingInterceptor);
    expect(interceptor).toBeTruthy();
  });
});

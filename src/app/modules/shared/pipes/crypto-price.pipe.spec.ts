import { CryptoPricePipe } from './crypto-price.pipe';

describe('CryptoPricePipe', () => {
  it('create an instance', () => {
    const pipe = new CryptoPricePipe();
    expect(pipe).toBeTruthy();
  });
});

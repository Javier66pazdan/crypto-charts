import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cryptoPercent'
})
export class CryptoPercentPipe implements PipeTransform {

  transform(value: string): string {
    if(Number(value) > 0) {
      return `+${Number(value).toFixed(2)}%`;
    }
    return `-${Number(value).toFixed(2)}%`;
  }

}

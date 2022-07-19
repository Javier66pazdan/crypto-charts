import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cryptoPrice'
})
export class CryptoPricePipe implements PipeTransform {

  transform(value: string): string {
    return `$${Number(value).toFixed(4)}`;
  }

}

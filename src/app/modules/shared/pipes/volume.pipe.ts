import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'volume'
})
export class VolumePipe implements PipeTransform {

  transform(value: string): string {
    return `$${(Math.abs(Number(value)) / 1.0e+6).toFixed(2)}M`;
  }

}

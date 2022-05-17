import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fancy'
})
export class FancyPipe implements PipeTransform {

  transform(value: string|undefined|null, ...args: unknown[]): unknown {
    return value + " ist fancy!";
  }

}

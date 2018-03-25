import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'orderBy', pure: false})
export class OrderByPipe implements PipeTransform {
  transform(array: Array<any>) {
    return array.sort((a, b) => {
      const [stringA, numberA] = this.order(a);
      const [stringB, numberB] = this.order(b);
      const comparison = stringA.localeCompare(stringB);
      return comparison === 0 ? Number(numberA) - Number(numberB) : comparison;
    })
  }

  order(item) {
    const [, stringPart = '', numberPart = 0] = /(^[a-zA-Z]*)(\d*)$/.exec(item) || [];
    return [stringPart, numberPart];
  }
}

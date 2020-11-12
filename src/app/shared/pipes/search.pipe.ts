import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(items: any[], ...args: string[]): any[] {
    if (!items) {
      return items;
    }

    if (!args.length || !args[0]) {
      return items;
    }
    const filterText: string = args[0].toLowerCase();

    return items.filter(it => {
      let item: any = null;
      for (let i = 1; i < args.length; i++) {
        item = it[args[i]].toLowerCase().includes(filterText);
        if (!!item) {
          break;
        }
      }

      return item;
    });
  }
}

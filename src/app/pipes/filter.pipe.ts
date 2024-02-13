import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string, name: string): unknown {
    if (!value.length || filterString === '') {
      return value;
    }
    filterString = filterString.toLowerCase();

    return value.filter(item => {
      return item[name].toLowerCase().includes(filterString); // Verificar si el nombre incluye el filtro
    });

  }

}

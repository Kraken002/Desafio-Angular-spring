import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'catergoria'
})
export class CatergoriaPipe implements PipeTransform {

  transform(value: string,): string {
    switch(value){
      case'front-end': return 'code';
      case 'back-end' : return 'computer';
    }
    return 'code';
  }

}

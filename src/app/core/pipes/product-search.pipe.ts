import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productSearch',
  standalone: true
})
export class ProductSearchPipe implements PipeTransform {

  transform(arrarofobject: any[] ,klma:string): any[] {
    return arrarofobject.filter( (item)=>item.title.toLowerCase().includes( klma.toLowerCase()) );
  }

}

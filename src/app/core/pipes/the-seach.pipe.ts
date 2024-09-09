import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'theSeach',
  standalone: true
})
export class TheSeachPipe implements PipeTransform {

  transform(arrarofobject: any[] ,po:string): any[] {
    return arrarofobject.filter( (item)=>item.title.toLowerCase().includes(po.toLowerCase()) );
  }

}

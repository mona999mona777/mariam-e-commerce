import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'theSeach',
  standalone: true
})
export class TheSeachPipe implements PipeTransform {

  transform(arrarofobject: any[] ,klma:string): any[] {
return     arrarofobject.filter( (item)=>item.category.name.includes( klma));
// .slice(0,6);
}

}

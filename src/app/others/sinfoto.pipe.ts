import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sinfoto'
})
export class SinfotoPipe implements PipeTransform {

  transform(value: any): string {
    
    let no_img:string = "assets/img/noimage.svg";
    
    if (!value) {
      return "no_img"
    }
  
    return (value.length > 0) ? value[1].url : no_img;
 
  }

}

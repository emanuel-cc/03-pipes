import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'password'
})
export class PasswordPipe implements PipeTransform {

  transform(value: string, mostrar:boolean = false): string {
    if(mostrar){
      value = '*'.repeat(value.length);
    }else{
      value = value;
    }
    return value;
  }

}

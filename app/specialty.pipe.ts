import {Pipe, PipeTransform} from 'angular2/core';
import {Restaurant} from './restaurant.model';

@Pipe({
  name: 'specialty',
})

export class SpecialtyPipe implements PipeTransform {
  transform(input: Restaurant[], args){
    var desiredSpecialty = args[0];
    if(desiredSpecialty === 'all'){
      return input;
    }else {
      return input.filter(function(restaurant){
        return (restaurant.specialty === desiredSpecialty);
      });
    }
  }
}

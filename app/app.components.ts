import { Component } from 'angular2/core';
import { Restaurant } from './restaurant.model';
@Component({
  selector: 'my-app',
  directives: [],
  template: `
  <h1>Restaurant Reviews</h1>
  `
})
export class AppComponent{
  public restaurants: Restaurant[];
  constructor(){

  }
}

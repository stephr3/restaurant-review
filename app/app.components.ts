import { Component, EventEmitter } from 'angular2/core';
import { Restaurant } from './restaurant.model';
import { NewRestaurantComponent } from './new-restaurant.component';
import { RestaurantListComponent} from './restaurant-list.component';
@Component({
  selector: 'my-app',
  directives: [RestaurantListComponent, NewRestaurantComponent],
  template: `
  <div class="container">
    <h1>Restaurant Reviews</h1>
    <restaurant-list [restaurantList]="restaurants"></restaurant-list>
  </div>
  `
})

export class AppComponent{
  public restaurants: Restaurant[] = [];
  constructor(){


  };
}

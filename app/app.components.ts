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
    this.restaurants = [
      new Restaurant("Mike's Burger", "American", "123 4th Ave", "$"),
      new Restaurant("Taqueria", "Mexican", "123 12th Ave", "$$"),
      new Restaurant("Olive Garden", "Italian", "1243 40th Ave", "$$"),
      new Restaurant("Kung Pow", "Chinese", "1233 43th Ave", "$"),
      new Restaurant("Korean BBQ", "Korean", "223 54th Ave", "$"),
      new Restaurant("Thai Express", "Thai", "1223 4th Ave", "$"),
    ];

  }
}

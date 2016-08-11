import {Component, EventEmitter} from 'angular2/core';
import {Restaurant} from './restaurant.model';
import {NewRestaurantComponent} from './new-restaurant.component';
import {RestaurantComponent} from './restaurant.component';

@Component({
  selector: 'restaurant-list',
  inputs: ['restaurantList'],
  directives: [RestaurantComponent, NewRestaurantComponent],
  template: `
  <div>
    <new-restaurant (onSubmitNewRestaurant)="createRestaurant($event)"></new-restaurant>
    <restaurant-display *ngFor="#thisRestaurant of restaurantList" [restaurant]="thisRestaurant"></restaurant-display>
  </div>
  `
})
export class RestaurantListComponent {
  public restaurantList: Restaurant[];
  constructor(){

  }
  createRestaurant(params: string[]): void{
    var newRestaurant = new Restaurant(params[0], params[1], params[2], params[3]);
    console.log(newRestaurant);
    newRestaurant.rating.push(parseInt(params[4]));
    newRestaurant.waitTime.push(parseInt(params[5]));
    console.log(this.restaurantList);
    this.restaurantList.push(newRestaurant);
  }
}

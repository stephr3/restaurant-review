import {Component, EventEmitter} from 'angular2/core';
import {Restaurant} from './restaurant.model';
import {NewRestaurantComponent} from './new-restaurant.component';
import {RestaurantComponent} from './restaurant.component';
import {RestaurantDetailsComponent} from './restaurant-details.component';

@Component({
  selector: 'restaurant-list',
  inputs: ['restaurantList'],
  directives: [RestaurantComponent, NewRestaurantComponent, RestaurantDetailsComponent],
  template: `
  <div>
    <new-restaurant (onSubmitNewRestaurant)="createRestaurant($event)"></new-restaurant>
    <restaurant-display *ngFor="#thisRestaurant of restaurantList" [restaurant]="thisRestaurant" (click)="restaurantClicked(thisRestaurant)"></restaurant-display>
    <hr>
    <restaurant-details *ngIf="selectedRestaurant" [restaurant]="selectedRestaurant"></restaurant-details>
  </div>
  `
})
export class RestaurantListComponent {
  public restaurantList: Restaurant[];
  public onRestaurantSelect: EventEmitter<Restaurant>;
  public selectedRestaurant: Restaurant;
  constructor(){
    this.onRestaurantSelect = new EventEmitter();
  }
  createRestaurant(params: string[]): void{
    var newRestaurant = new Restaurant(params[0], params[1], params[2], params[3]);
    console.log(newRestaurant);
    newRestaurant.rating.push(parseInt(params[4]));
    newRestaurant.waitTime.push(parseInt(params[5]));
    this.restaurantList.push(newRestaurant);
    console.log(this.restaurantList);
  }
  restaurantClicked(clickedRestaurant: Restaurant): void {
    this.selectedRestaurant = clickedRestaurant;
    this.onRestaurantSelect.emit(clickedRestaurant);
  }
}

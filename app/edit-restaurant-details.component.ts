import {Component, EventEmitter} from 'angular2/core';
import {Restaurant} from './restaurant.model';

@Component({
  selector: 'edit-restaurant-details',
  inputs: ['restaurant'],
  template: `
  <hr>
  <h3>Edit {{restaurant.name}} Details</h3>
  <input [(ngModel)]="restaurant.name">
  <input [(ngModel)]="restaurant.address">
  `
})
export class EditRestaurantDetailsComponent {
  public restaurant: Restaurant;

}

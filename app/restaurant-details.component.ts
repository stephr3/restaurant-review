import {Component} from 'angular2/core';
import {Restaurant} from './restaurant.model';

@Component({
  selector: 'restaurant-details',
  inputs: ['restaurant'],
  template: `
    <ul>
      <li>Name: {{restaurant.name}}</li>
      <li>Specialty: {{restaurant.specialty}}</li>
      <li>Address: {{restaurant.address}}</li>
      <li>Pricing: {{restaurant.cost}}</li>
      <li>Rating: {{restaurant.rating}}</li>
      <li>Average Wait Time: {{restaurant.waitTime}}</li>
    </ul>
  `
})
export class RestaurantDetailsComponent {
  public restaurant: Restaurant;
}

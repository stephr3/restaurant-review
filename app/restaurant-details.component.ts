import {Component} from 'angular2/core';
import {Restaurant} from './restaurant.model';

@Component({
  selector: 'restaurant-details',
  inputs: ['restaurant'],
  template: `
  <hr>
  <h3> {{restaurant.name}} Details</h3>
    <ul>
      <li>Name: {{restaurant.name}}</li>
      <li>Specialty: {{restaurant.specialty}}</li>
      <li>Address: {{restaurant.address}}</li>
      <li>Pricing: {{restaurant.cost}}</li>
      <li *ngIf="(restaurant.rating.length === 0)"> Not Rated.</li>
      <li *ngIf="(restaurant.rating.length > 0)">Rating: {{getAverage(restaurant.rating)}}</li>
      <li *ngIf="(restaurant.waitTime.length === 0)"> Average wait time not available.</li>
      <li *ngIf="(restaurant.waitTime.length > 0)">Average Wait Time: {{getAverage(restaurant.waitTime)}}</li>
    </ul>
    <div>
    <h3>Add your feedback</h3>
    <label>Rating</label>
    <select #newRating id="newRating">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
    </div>
    <div>
      <label>How long did you wait?</label>
      <input placeholder="minutes" #newWaitTime>
    </div>
    <button (click)="submitOpinion(newRating, newWaitTime)">Submit</button>
  `
})
export class RestaurantDetailsComponent {
  public restaurant: Restaurant;

  submitOpinion(newRating: HTMLSelectElement, newWaitTime: HTMLInputElement){
    this.restaurant.rating.push(parseInt(newRating.value));
    this.restaurant.waitTime.push(parseInt(newWaitTime.value));
    console.log(this.restaurant);
  }
  getAverage(numberArray: number[]){
    var total = 0;
    for(var i=0; i<numberArray.length; i++)
    {
      total += numberArray[i];
    }
    return total/numberArray.length;
  }
}

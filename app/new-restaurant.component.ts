import { Component, EventEmitter } from 'angular2/core';
import { Restaurant } from './restaurant.model';

@Component({
  selector: 'new-restaurant',
  outputs: ['onSubmitNewRestaurant'],
  template: `
    <h3>Add a New Restaurant</h3>
    <form>
      <input placeholder="Name" #newName>
      <select #newSpecialty id="newSpecialty">
        <option>American</option>
        <option>Mexican<option>
        <option>Italian</option>
        <option>Chinese</option>
        <option>Korean</option>
        <option>Thai</option>
        <option>Other</option>
      </select>
      <input placeholder="Address" #newAddress>
      <label for="newCost">Cost:</label>
      <select #newCost id="newCost">
        <option>$</option>
        <option>$$</option>
        <option>$$$</option>
      </select>
      <label for="newRating">Rating:</label>
      <select #newRating id="newRating">
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </select>
      <input placeholder="Time you Waited" #newWaitTime>
      <button (click)="addRestaurant(newName, newSpecialty, newAddress, newCost, newRating, newWaitTime)">Add Restaurant</button>
    </form>
  `
})
export class NewRestaurantComponent {
  public onSubmitNewRestaurant: EventEmitter<string[]>;
  constructor(){
    this.onSubmitNewRestaurant = new EventEmitter();
  }
  addRestaurant(userName: HTMLInputElement, userSpecialty: HTMLInputElement, userAddress: HTMLInputElement, userCost: HTMLSelectElement, userRating: HTMLSelectElement, userWaitTime: HTMLInputElement){
    var params: string[] = [userName.value, userSpecialty.value, userAddress.value, userCost.value, userRating.value, userWaitTime.value];
    this.onSubmitNewRestaurant.emit(params);
    userName.value = "";
    userSpecialty.value = "";
    userAddress.value = "";
    userCost.value = "$";
    userRating.value = "5";
    userWaitTime.value = "";
  }
}

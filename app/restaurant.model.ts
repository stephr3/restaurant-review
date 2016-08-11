export class Restaurant {
  public rating: number[] = [];
  public waitTime: number[] = [];
  constructor (public name: string, public specialty: string, public address: string, public cost: string){

  }
}

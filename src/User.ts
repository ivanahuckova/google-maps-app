import faker from 'faker';
import { Mappable } from './CustomMap'

export class User implements Mappable {
  name: string;
  color: string;
  location: {
    lat: number;
    lng: number;
  };
  constructor() {
    this.name = faker.name.firstName();
    this.color = faker.commerce.color();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    }

  }

  markerContent(): string {
    return `<h1>Name: ${this.name}</h1>`
  }
}
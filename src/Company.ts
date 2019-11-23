import faker from 'faker';
import { Mappable } from './CustomMap';

export class Company implements Mappable {
  companyName: string;
  catchPhrase: string;
  color: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.companyName = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.color = faker.commerce.color();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    }
  }
  markerContent() {
    return `
      <div>
        <h1>Company: ${this.companyName}</h1>
        <h3>Catchphrase: ${this.catchPhrase}</h3>
      </div>
    `
  }
}


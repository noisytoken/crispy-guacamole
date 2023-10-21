import { faker } from "@faker-js/faker";
import { Mappable } from "./CustomMap";

export class Company implements Mappable {
  companyName: string;
  catchPhrase: string;
  location: { 
    lat: number;
    lng: number;
  };

  color: string = "red";

  constructor() {
    this.companyName = faker.company.name();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: faker.address.latitude(),
      lng: faker.address.latitude(),
    }
  }

  markerContent(): string {
    return `Company name ${this.companyName}`;
  }
}

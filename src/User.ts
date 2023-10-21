import { faker } from "@faker-js/faker";
import {Mappable} from "./CustomMap";

export class User implements Mappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string;

  constructor() {
    this.name = faker.person.firstName();
    this.location = {
      lat: faker.address.latitude(),
      lng: faker.address.latitude(),
    }
  }

  markerContent(): string {
    return `User name ${this.name}`;
  }
}


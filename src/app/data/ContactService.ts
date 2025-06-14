import {Contact} from './models/Contact';
import { faker } from '@faker-js/faker';
import {Injectable} from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private contacts: Contact[] = [];

  constructor() {
    this.generateContacts();
  }

  getContacts(): Observable<Contact[]> {
    return of (this.contacts);
  }

  private generateContacts() {
    for (let i = 0; i < 20; i++) {
      var c = new Contact();
      c.firstName = faker.person.firstName();
      c.lastName = faker.person.lastName();
      c.email = faker.internet.email();
      c.dateOfBirth = faker.date.birthdate({mode: "age", min: 18, max: 59})
      c.homePhone = faker.phone.number();
      c.cellPhone = faker.phone.number();
      c.address1 = faker.address.streetAddress();
      c.address2 = faker.address.secondaryAddress();
      c.city = faker.address.city();
      c.state = faker.address.state();
      c.country = faker.address.country();

      this.contacts.push(c);
    }
  }
}

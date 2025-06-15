import {Contact} from './models/Contact';
import { faker} from '@faker-js/faker';
import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private contacts: Contact[] = [];

  constructor() {
    this.generateContacts();
  }

  getContacts(): Observable<Contact[]> {
    return of(this.contacts);
  }

  getContact(id: string): Observable<Contact | null> {
    let contact = this.contacts.find((contact) => contact.id.toString() === id);
    if (contact != undefined) {
      return of (contact);
    }
    return of (null);
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
      c.address1 = faker.location.streetAddress();
      c.address2 = faker.location.secondaryAddress();
      c.city = faker.location.city();
      c.state = faker.location.state();
      c.zip = faker.location.zipCode();
      c.country = faker.location.country();

      this.contacts.push(c);
    }
  }
}

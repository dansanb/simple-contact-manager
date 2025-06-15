import {Component} from '@angular/core';
import {ContactService} from '../../../data/ContactService';
import {ActivatedRoute,  RouterLink} from '@angular/router';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {Contact} from '../../../data/models/Contact';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-contacts-view',
  imports: [
    ReactiveFormsModule,
    DatePipe,
    RouterLink,
  ],
  templateUrl: './contacts-view.html',
  styleUrl: './contacts-view.css'
})
export class ContactsView {
  private contactService: ContactService;
  private route: ActivatedRoute;
  protected contactId: string | null = null;
  protected contact: Contact | null = null;

  protected contactForm = new FormGroup({
    firstName: new FormControl('first name'),
    middleName: new FormControl('middle name'),
    lastName: new FormControl('last name'),
    dateOfBirth: new FormControl('date of birth'),
    email: new FormControl('email'),
    homePhone: new FormControl('home phone'),
    cellPhone: new FormControl('cell phone'),
    address1: new FormControl('address 1'),
    address2: new FormControl('address 2'),
    city: new FormControl('city'),
    state: new FormControl('state'),
    zip: new FormControl('zip'),
    country: new FormControl('country'),
    notes: new FormControl('notes')
  })

  constructor(contactService: ContactService,
              route: ActivatedRoute) {
    this.contactService = contactService;
    this.route = route;
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.contactId = params.get('id');

      if (this.contactId != null)
      {
        this.contactService.getContact(this.contactId).subscribe({
          next: (contact) => {
            this.contact = contact;
          },
          error: (error) => {
           console.log(error);
          }
        })
      }
    })
  }

  protected readonly name = name;
}

import { Component } from '@angular/core';
import {ContactService} from '../../data/ContactService';
import {Contact} from '../../data/models/Contact';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  contacts: Contact[] = [];
  private contactService: ContactService;

  constructor(contactService: ContactService) {
    this.contactService = contactService;
  }

  ngOnInit() {
    this.contactService.getContacts().subscribe({
      next: contacts => { this.contacts = contacts;},
      error: error => console.log(error),
    });
  }
}

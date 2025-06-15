import { Component } from '@angular/core';
import {Contact} from '../../../data/models/Contact';
import {Router, RouterLink} from '@angular/router';
import {ContactService} from '../../../data/ContactService';

@Component({
  selector: 'app-contacts-index',
  imports: [
    RouterLink
  ],
  templateUrl: './contacts-index.html',
  styleUrl: './contacts-index.css'
})
export class ContactsIndex {
  protected contacts: Contact[] = [];
  private contactService: ContactService;
  private router: Router;

  constructor(router: Router, contactService: ContactService) {
    this.router = router;
    this.contactService = contactService;
  }

  ngOnInit() {
    this.contactService.getContacts().subscribe({
      next: contacts => {
        this.contacts = contacts;
      },
      error: err => { console.log(err); }
    });
  }

}

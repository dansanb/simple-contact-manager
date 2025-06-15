import {Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ContactService} from '../../../data/ContactService';

@Component({
  selector: 'app-contacts-update',
  imports: [],
  templateUrl: './contacts-update.html',
  styleUrl: './contacts-update.css'
})
export class ContactsUpdate {

  private contactService: ContactService;
  private route: ActivatedRoute;
  protected contactId: string | null;

  constructor(contactService: ContactService, route: ActivatedRoute) {
    this.route = route;
    this.contactService = contactService;

    this.contactId = "";
  }
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.contactId = params.get('id');
    })
  }
}

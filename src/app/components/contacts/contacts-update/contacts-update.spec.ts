import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsUpdate } from './contacts-update';

describe('ContactsUpdate', () => {
  let component: ContactsUpdate;
  let fixture: ComponentFixture<ContactsUpdate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactsUpdate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactsUpdate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

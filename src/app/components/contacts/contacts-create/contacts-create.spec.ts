import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsCreate } from './contacts-create';

describe('ContactsCreate', () => {
  let component: ContactsCreate;
  let fixture: ComponentFixture<ContactsCreate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactsCreate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactsCreate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

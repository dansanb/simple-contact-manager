import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsIndex } from './contacts-index';

describe('ContactsIndex', () => {
  let component: ContactsIndex;
  let fixture: ComponentFixture<ContactsIndex>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactsIndex]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactsIndex);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

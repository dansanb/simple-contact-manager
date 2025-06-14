import {Guid} from 'guid-typescript';

export class Contact {
  id: Guid;
  firstName?: string;
  middleName?: string;
  lastName?: string;
  email?: string;
  dateOfBirth?: Date;
  homePhone?: string;
  cellPhone?: string;
  address1?: string;
  address2?: string;
  city?: string;
  state?: string;
  country?: string;
  notes?: string;

  constructor(){
    this.id = Guid.create();
  }
}

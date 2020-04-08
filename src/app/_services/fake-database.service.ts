import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api'

@Injectable({
  providedIn: 'root'
})
export class FakeDatabaseService implements InMemoryDbService {

  constructor() { }

  createDb() {
    let contactInfoDB = [
      { id: 1, firstName: 'Hemant', lastName: 'Wani', contactNumber: '9975335317', emailId: 'hpwani@gmail.com', address: 'Karve nagar, Pune', status: 'true' },
      { id: 2, firstName: 'Ketki', lastName: 'Rane', contactNumber: '9975335317', emailId: 'hpwani@gmail.com', address: 'Karve nagar, Pune', status: 'true' },
      { id: 3, firstName: 'Rahul', lastName: 'Gade', contactNumber: '9975335317', emailId: 'hpwani@gmail.com', address: 'Karve nagar, Pune', status: 'true' },
      { id: 4, firstName: 'Avani', lastName: 'Yawalkar', contactNumber: '9975335317', emailId: 'hpwani@gmail.com', address: 'Karve nagar, Pune', status: 'true' },
    ];
    return {contactsDetails: contactInfoDB};
  }
}

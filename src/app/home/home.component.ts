import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { contactBookInfo } from '../_models';
import { ContactBookInfoService } from '../_services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  addContactForm: FormGroup;
  contactBookData: contactBookInfo[];
  ContactBookTbl: any;

  constructor(
    private formBuilder: FormBuilder,
    private contactBookInfoService: ContactBookInfoService,
  ) { }

  ngOnInit(): void {
    this.createForm();
    this.getContactBookData();
  }

  createForm() {
    this.addContactForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      contactNumber: ['', Validators.required],
      emailId: ['', Validators.required],
      address: ['', Validators.required],
    })
  }

  getContactBookData() {
    this.contactBookInfoService.getContactBookData().subscribe(data => {
      this.ContactBookTbl = data;
    });
  }

  addContactInfo() {
    
  }

}

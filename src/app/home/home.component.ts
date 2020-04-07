import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  addContactForm: FormGroup;


  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
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

  addContactInfo() {
    
  }

}

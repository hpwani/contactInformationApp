import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { contactBookInfo } from '../_models';
import { ContactBookInfoService } from '../_services';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UpdateModelComponent } from '../update-model/update-model.component';
import { ToastrService } from 'ngx-toastr';
import { ConfirmationModelComponent } from '../confirmation-model/confirmation-model.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  addContactForm: FormGroup;
  contactBookData: contactBookInfo[];
  ContactBookTbl: any;
  statusToggle: any;

  constructor(
    private formBuilder: FormBuilder,
    private contactBookInfoService: ContactBookInfoService,
    private dialog: MatDialog,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
    this.createForm();
    this.getContactBookData();
  }

  /*====================Create Contact Form====================*/
  createForm() {
    this.addContactForm = this.formBuilder.group({
      firstName: ['', {
        validators: [Validators.required]
      }],
      lastName: ['', {
        validators: [Validators.required]
      }],
      contactNumber: ['', {
        validators: [Validators.required]
      }],
      emailId: ['', {
        validators: [Validators.required]
      }],
      address: ['', {
        validators: [Validators.required]
      }],
      status: [false, {
        validators: []
      }],
    })
  }

  /*================Add Contact Confirmation Box==================*/
  addContactInfo(): void {
    const dialogRef = this.dialog.open(ConfirmationModelComponent, {
      width: '400px',
      data: { 'msg': 'Do you want to add this contact?' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        let contactBookData = this.addContactForm.value;
        this.contactBookInfoService.addContactBookData(contactBookData).subscribe(data => {
          this.getContactBookData();
          this.toastr.success('Contact Added Successfully!', 'Success');
          this.addContactForm.reset();
        });
      }
    });
  }

  /*===================Edit Contact Model Form=====================*/
  editContact(id) {
    this.openDialog(id);
  }

  openDialog(id): void {
    const dialogRef = this.dialog.open(UpdateModelComponent, {
      width: '600px',
      data: id
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getContactBookData();
    });
  }

  /*===================Delete Contact Confirmation Box===================*/
  deleteContact(id): void {
    const dialogRef = this.dialog.open(ConfirmationModelComponent, {
      width: '400px',
      data: { 'msg': 'Do you want to delete this contact?' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.contactBookInfoService.deleteContactBookData(id).subscribe(data => {
          this.getContactBookData();
          this.toastr.success('Contact Deleted Successfully!', 'Success');
        });
      }
    });
  }

  /*===================Get Table Data================*/
  getContactBookData() {
    this.contactBookInfoService.getContactBookData().subscribe(data => {
      this.ContactBookTbl = data;
    });
  }

}

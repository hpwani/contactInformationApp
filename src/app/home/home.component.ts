import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { contactBookInfo } from '../_models';
import { ContactBookInfoService } from '../_services';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UpdateModelComponent } from '../update-model/update-model.component';

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
    private dialog: MatDialog
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

  addContactInfo() {
    let contactBookData = this.addContactForm.value;
    this.addContactData(contactBookData);
    this.addContactForm.reset();
  }

  addContactData(contactBookData: contactBookInfo) {
    this.contactBookInfoService.addContactBookData(contactBookData).subscribe(data => {
      this.getContactBookData();
    });
  }

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

  deleteContact(id) {
    this.contactBookInfoService.deleteContactBookData(id).subscribe(data => {
      this.getContactBookData();
    });
  }

  getContactBookData() {
    this.contactBookInfoService.getContactBookData().subscribe(data => {
      this.ContactBookTbl = data;
    });
  }

}

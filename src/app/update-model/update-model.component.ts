import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { contactBookInfo } from '../_models';
import { ContactBookInfoService } from '../_services';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-update-model',
  templateUrl: './update-model.component.html',
  styleUrls: ['./update-model.component.css']
})
export class UpdateModelComponent implements OnInit {
  updateContactForm: FormGroup;
  contactBookData: contactBookInfo[];
  ContactBookTbl: any;
  contactId: any;

  constructor(
    private formBuilder: FormBuilder,
    private contactBookInfoService: ContactBookInfoService,
    public dialogRef: MatDialogRef<UpdateModelComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit(): void {
    this.createForm();
    this.contactId = this.data;
    this.editContactById(this.contactId);
  }

  createForm() {
    this.updateContactForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      contactNumber: ['', Validators.required],
      emailId: ['', Validators.required],
      address: ['', Validators.required],
    })
  }

  editContactById(contactId) {
    this.contactBookInfoService.getContactById(contactId).subscribe(data => {
      this.updateContactForm.controls.firstName.setValue(data['firstName']);
      this.updateContactForm.controls.lastName.setValue(data['lastName']);
      this.updateContactForm.controls.contactNumber.setValue(data['contactNumber']);
      this.updateContactForm.controls.emailId.setValue(data['emailId']);
      this.updateContactForm.controls.address.setValue(data['address']);
    });
  }

  updateContactInfo(updateFormData: contactBookInfo) {
    console.log(updateFormData)
    this.contactBookInfoService.updateContactBookData(this.contactId,updateFormData).subscribe(data => {
      console.log(data);
      this.dialogRef.close();
      this.updateContactForm.reset();
    });
  }

  onCancel() {
    this.dialogRef.close();
  }

}

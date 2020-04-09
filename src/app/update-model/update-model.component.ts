import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { contactBookInfo } from '../_models';
import { ContactBookInfoService } from '../_services';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';

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
  statusToggle: any;

  constructor(
    private formBuilder: FormBuilder,
    private contactBookInfoService: ContactBookInfoService,
    private toastr: ToastrService,
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
      firstName: ['', {
        validators: [Validators.required]
      }],
      lastName: ['', {
        validators: [Validators.required]
      }],
      contactNumber: ['', {
        validators: [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/), Validators.maxLength(10)]
      }],
      emailId: ['', {
        validators: [Validators.required, Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]
      }],
      address: ['', {
        validators: [Validators.required]
      }],
      status: [false, {
        validators: []
      }],
    })
  }

  editContactById(contactId) {
    this.contactBookInfoService.getContactById(contactId).subscribe(data => {
      this.updateContactForm.controls.firstName.setValue(data['firstName']);
      this.updateContactForm.controls.lastName.setValue(data['lastName']);
      this.updateContactForm.controls.contactNumber.setValue(data['contactNumber']);
      this.updateContactForm.controls.emailId.setValue(data['emailId']);
      this.updateContactForm.controls.address.setValue(data['address']);
      this.updateContactForm.controls.status.setValue(data['address']);
    });
  }

  updateContactInfo(updateFormData: contactBookInfo) {
    this.contactBookInfoService.updateContactBookData(this.contactId,updateFormData).subscribe(data => {
      console.log(data);
      this.dialogRef.close();
      this.updateContactForm.reset();
      this.toastr.success('Contact Updated Successfully!', 'Success');
    });
  }

  onCancel() {
    this.dialogRef.close();
  }

}

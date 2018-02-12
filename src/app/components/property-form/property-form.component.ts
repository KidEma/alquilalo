import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { MatStepper } from "@angular/material";

@Component({
  selector: 'app-property-form',
  templateUrl: './property-form.component.html',
  styleUrls: ['./property-form.component.css']
})
export class PropertyFormComponent implements OnInit {
  firstFormGroup: FormGroup;
  @ViewChild('stepper') stepper: MatStepper;
  @Output()
  notify: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();

  constructor(private _formBuilder: FormBuilder) {

  }

  ngOnInit() {
    this.notify.emit(this.firstFormGroup)
    
    this.firstFormGroup = this._formBuilder.group({
      // _id: { type: String, index: { unique: true } },
      // title: { type: String, required: true },
      // description: { type: String, required: false },
      // type: { type: String, required: false },
      // photoThumb: { type: String, required: false },
      // photos: { type: [String], required: false },
      // activeLeaseId: { type: Number, required: false },
      // leaseIds: { type: [Number], required: false },
      // userIds: { type: [Number], required: false },
      // ownerIds: { type: [Number], required: false },
      // agencyId: { type: Number, required: false },
      // addressId: { type: Number, required: false },
      // bathRooms: { type: Number, required: false },
      // bedRooms: { type: Number, required: false },
      // totalRooms: { type: Number, required: false },
      // furnished: { type: Boolean, required: false }
      title: ['', Validators.required],
      description: ['', Validators.required],
      type: [''],

    });
  }
  private emitNotification() {
    this.notify.emit(this.firstFormGroup)
  }
}

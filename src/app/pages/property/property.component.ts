import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup } from "@angular/forms";
import { FormBuilder } from "@angular/forms/";
import { Validators } from "@angular/forms";

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent implements OnInit, OnDestroy {
  private propertyId: number;
  private sub: any;
  secondFormGroup: FormGroup;
  myFormGroup: FormGroup;
  // Workaroud to separate steps into components
  // https://stackoverflow.com/questions/46939250/angular-angular-material-2-stepper-controls/47661388#47661388
  onNotify(formGroup: FormGroup): void {
    this.myFormGroup = formGroup;
  }
  constructor(
    private route: ActivatedRoute, private _formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.propertyId = params['propertyId'];
      //getPropertyById$()
      // Load property details here
    });



    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  private _getPropertyData(propertyId: number) {
    // this.loading = true;
    // // Get all (admin) events
    // this.propertiesSub = this.api
    //   .getAdminProperties$()
    //   .subscribe(
    //     res => {
    //       this.propertyList = res;
    //       this.loading = false;
    //     },
    //     err => {
    //       console.error(err);
    //       this.loading = false;
    //       this.error = true;
    //     }
    //   );
  }

  private isCompleted() {
    return this.myFormGroup ? this.myFormGroup.valid : false
  }

  private checkAndSave(e) {    
    if (this.isCompleted()){
      console.log('saving data...')  
    }
    console.log(e)  
  
  } 
}

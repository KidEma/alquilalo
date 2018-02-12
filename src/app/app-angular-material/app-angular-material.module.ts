import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import {NgcFloatButtonModule} from 'ngc-float-button';
import {MatStepperModule} from '@angular/material/stepper';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';


@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    NgcFloatButtonModule,
    BrowserAnimationsModule,    
    FormsModule,
    BrowserAnimationsModule,
    MatStepperModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule
  ],
  exports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    NgcFloatButtonModule,
    BrowserAnimationsModule,    
    FormsModule,
    BrowserAnimationsModule,    
    MatStepperModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule
  ],
  declarations: []
})
export class AppAngularMaterialModule { }

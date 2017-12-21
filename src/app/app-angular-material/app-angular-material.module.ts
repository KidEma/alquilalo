import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import {NgcFloatButtonModule} from 'ngc-float-button';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    NgcFloatButtonModule
  ],
  exports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    NgcFloatButtonModule
  ],
  declarations: []
})
export class AppAngularMaterialModule { }

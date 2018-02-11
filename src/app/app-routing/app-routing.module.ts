import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from '../pages/landing/landing.component'
import { HomeComponent } from '../pages/home/home.component';
import { CallbackComponent } from '../pages/callback/callback.component';
import { AuthGuard } from '../auth/auth.guard';
import { AdminGuard } from '../auth/admin.guard';
import { AdminComponent } from '../pages/admin/admin.component';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { PropertiesComponent } from '../pages/properties/properties.component';
import { PropertyComponent } from '../pages/property/property.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [
      AuthGuard
    ]
  },
  {
    path: 'properties',
    component: PropertiesComponent,
    canActivate: [
      AuthGuard
    ]
  },
  {
    path: 'property/:propertyId',
    component: PropertyComponent,
    canActivate: [
      AuthGuard
    ]
  },
  {
    path: 'callback',
    component: CallbackComponent
  },
  {
    path: 'admin',
    canActivate: [
      AuthGuard,
      AdminGuard
    ],
    children: [
      {
        path: '',
        component: AdminComponent
      }
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    AuthGuard,
    AdminGuard
  ],
  declarations: []
})
export class AppRoutingModule { }

/*
 *
 * Angular modules
 * 
 * */
import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

/*
 *
 * Auth modules and services
 * 
 * */
import { AuthService } from './auth/auth.service';
import { ApiService } from './core/api.service';
import { UtilsService } from './core/utils.service';
import { FilterSortService } from './core/filter-sort.service';

/*
 *
 * App components
 * 
 * */
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CallbackComponent } from './pages/callback/callback.component';
import { LoadingComponent } from './core/loading.component';
import { AdminComponent } from './pages/admin/admin.component';
import { LandingComponent } from './pages/landing/landing.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';


/*
 *
 * Angular material components
 * 
 * */
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppAngularMaterialModule} from '../app/app-angular-material/app-angular-material.module';
import { MenuComponent } from './menu/menu.component';
import { DashboardCardComponent } from './components/dashboard-card/dashboard-card.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    CallbackComponent,
    LoadingComponent,
    AdminComponent,
    LandingComponent,
    DashboardComponent,
    MenuComponent,
    DashboardCardComponent
  ],
  imports: [
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AppAngularMaterialModule
  ],
  providers: [
    Title,
    AuthService,
    ApiService,
    DatePipe,
    UtilsService,
    FilterSortService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

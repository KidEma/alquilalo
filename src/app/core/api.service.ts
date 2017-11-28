// src/app/core/api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { AuthService } from './../auth/auth.service';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import { ENV } from './env.config';
import { PropertyModel } from './models/property.model';

@Injectable()
export class ApiService {

  constructor(
    private http: HttpClient,
    private auth: AuthService) { }

  private get _authHeader(): string {
    return `Bearer ${localStorage.getItem('access_token')}`;
  }

  // GET list of public, future events
  // getEvents$(): Observable<PropertyModel[]> {
  //   return this.http
  //     .get(`${ENV.BASE_API}events`)
  //     .catch(this._handleError);
  // }

  // GET all properties - private and public (admin only)
  getAdminProperties$(): Observable<PropertyModel[]> {
    return this.http
      .get(`${ENV.BASE_API}properties/admin`, {
        headers: new HttpHeaders().set('Authorization', this._authHeader)
      })
      .catch(this._handleError);
  }

  // GET a property by ID (login required)
  getPropertyById$(id: string): Observable<PropertyModel> {
    return this.http
      .get(`${ENV.BASE_API}property/${id}`, {
        headers: new HttpHeaders().set('Authorization', this._authHeader)
      })
      .catch(this._handleError);
  }

  // GET RSVPs by event ID (login required)
  // getRsvpsByEventId$(eventId: string): Observable<PropertyModel[]> {
  //   return this.http
  //     .get(`${ENV.BASE_API}event/${eventId}/rsvps`, {
  //       headers: new HttpHeaders().set('Authorization', this._authHeader)
  //     })
  //     .catch(this._handleError);
  // }

  private _handleError(err: HttpErrorResponse | any) {
    const errorMsg = err.message || 'Error: Unable to complete request.';
    if (err.message && err.message.indexOf('No JWT present') > -1) {
      this.auth.login();
    }
    return Observable.throw(errorMsg);
  }

}

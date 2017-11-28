// src/app/pages/admin/admin.component.ts
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AuthService } from './../../auth/auth.service';
import { ApiService } from './../../core/api.service';
import { UtilsService } from './../../core/utils.service';
import { FilterSortService } from './../../core/filter-sort.service';
import { Subscription } from 'rxjs/Subscription';
import { PropertyModel } from './../../core/models/property.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit, OnDestroy {
  pageTitle = 'Admin area';
  propertiesSub: Subscription;
  propertyList: PropertyModel[];
  filteredEvents: PropertyModel[];
  loading: boolean;
  error: boolean;
  query = '';

  constructor(
    private title: Title,
    public auth: AuthService,
    private api: ApiService,
    public utils: UtilsService,
    public fs: FilterSortService) { }

  ngOnInit() {
    this.title.setTitle(this.pageTitle);
    this._getPropertiesList();
  }

  private _getPropertiesList() {
    this.loading = true;
    // Get all (admin) events
    this.propertiesSub = this.api
      .getAdminProperties$()
      .subscribe(
        res => {
          this.propertyList = res;
          this.filteredEvents = res;
          this.loading = false;
        },
        err => {
          console.error(err);
          this.loading = false;
          this.error = true;
        }
      );
  }

  searchProperties() {
    this.filteredEvents = this.fs.search(this.propertyList, this.query, '_id', 'title');
  }

  resetQuery() {
    this.query = '';
    this.filteredEvents = this.propertyList;
  }

  ngOnDestroy() {
    this.propertiesSub.unsubscribe();
  }

}
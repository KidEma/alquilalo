// src/app/pages/home/home.component.ts
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ApiService } from './../../core/api.service';
import { UtilsService } from './../../core/utils.service';
import { FilterSortService } from './../../core/filter-sort.service';
import { Subscription } from 'rxjs/Subscription';
import { PropertyModel } from './../../core/models/property.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  pageTitle = 'Mis Propiedades';
  propertyListSub: Subscription;
  propertyList: PropertyModel[];
  filteredProperties: PropertyModel[];
  loading: boolean;
  error: boolean;
  query: '';

  constructor(
    private title: Title,
    public utils: UtilsService,
    private api: ApiService,
    public fs: FilterSortService) { }

  ngOnInit() {
    this.title.setTitle(this.pageTitle);
    this._getEventList();
  }

  private _getEventList() {
    this.loading = true;
    // Get future, public events
    this.propertyListSub = this.api
      .getAdminProperties$()
      .subscribe(
        res => {
          this.propertyList = res;
          this.filteredProperties = res;
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
    this.filteredProperties = this.fs.search(this.propertyList, this.query, '_id', 'title');
  }

  resetQuery() {
    this.query = '';
    this.filteredProperties = this.propertyList;
  }

  ngOnDestroy() {
    this.propertyListSub.unsubscribe();
  }

}
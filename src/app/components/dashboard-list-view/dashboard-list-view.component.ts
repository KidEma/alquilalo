import { Component, OnInit, Input } from '@angular/core';
import { DashboardListContainerComponent } from '../dashboard-list-container/dashboard-list-container.component'
import { PropertyModel } from '../../core/models/property.model';
import { Subscription } from 'rxjs';
import { AuthService } from '../../auth/auth.service';
import { ApiService } from '../../core/api.service';
import { UtilsService } from '../../core/utils.service';
import { FilterSortService } from '../../core/filter-sort.service';
import { PropertyToExpireModel } from '../../core/models/propertyToExpire.model';

@Component({
  selector: 'app-dashboard-list-view',
  templateUrl: './dashboard-list-view.component.html',
  styleUrls: ['./dashboard-list-view.component.css']
})
export class DashboardListViewComponent implements OnInit {
  error: boolean;
  propertiesSub: Subscription;
  propertyList: PropertyModel[];
  filteredProperties: PropertyToExpireModel[];
  query: number = 10;
  @Input()
  data: PropertyModel[];
  constructor(
    public auth: AuthService,
    private api: ApiService,
    public utils: UtilsService,
    public fs: FilterSortService) {
  }

  ngOnInit() {
    this.query = 10;
    this.filteredProperties = this.transformModel(this.data);
  }

  searchProperties() {
    if (this.query)
      //TODO: retrieve actual data
      this.filteredProperties = this.fs
      .searchDateRange(this.transformModel(this.data), 
      "expiryDate", 
      new Date(), 
      this.filterDate(this.query))
  }

  resetQuery() {
    this.query = 10;
    this.filteredProperties = this.transformModel(this.data);
  }

  transformModel(data: PropertyModel[]) {
    if (!data) return [];
    return data
    .map(function (val) {
      return {
        title: val.title,
        type: val.type,
        description: val.description,
        photoThumb: val.photoThumb,
        amount: 1000,
        expiryDate: new Date()
      };
    });
  }

  filterDate(days: number){

    var result = new Date();
    result.setDate(result.getDate() + days);
    return result;
  }


}

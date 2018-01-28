import { Component, OnInit } from '@angular/core';
import { DashboardCard } from '../../components/dashboard-card'
import { Title } from '@angular/platform-browser';
import { AuthService } from './../../auth/auth.service';
import { ApiService } from './../../core/api.service';
import { UtilsService } from './../../core/utils.service';
import { FilterSortService } from './../../core/filter-sort.service';
import { Subscription } from 'rxjs/Subscription';
import { PropertyModel } from './../../core/models/property.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  propertiesSub: Subscription;
  pageTitle = 'Dashboard';
  loading: boolean;
  error: boolean;
  public propertyList: PropertyModel[];   
  public alertCard: DashboardCard;
  public servicesCard: DashboardCard;
  public contractsCard: DashboardCard;

  constructor(private title: Title,
    public auth: AuthService,
    private api: ApiService,
    public utils: UtilsService,
    public fs: FilterSortService) {
    this.alertCard = {
      title: "Alquileres Atrasados",
      description: "Hay 2 propiedades con alquileres atrasados",
      icon: "warning",
      link: '/properties'
    }

    this.servicesCard = {
      title: "Servicios Impagos",
      description: "Hay 10 propiedades con servicios impagos",
      icon: "lightbulb_outline",
      link: '/properties'
    }

    this.contractsCard = {
      title: "Contratos",
      description: "Hay 3 contratos por vencer",
      icon: "library_books",
      link: '/properties'
    }

    
  }

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
          this.loading = false;
        },
        err => {
          console.error(err);
          this.loading = false;
          this.error = true;
        }
      );
  }

}

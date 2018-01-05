import { Component, OnInit } from '@angular/core';
import { DashboardCard } from '../../components/dashboard-card'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public alertCard: DashboardCard;
  public servicesCard: DashboardCard;
  public contractsCard: DashboardCard;

  constructor() {
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

  }

}

import { Component, OnInit } from '@angular/core';
import { DashboardCard } from '../../components/dashboard-card'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
public alertCard : DashboardCard = {
  title: "8 alertas pendientes",
  description: "Hay items que requieren su atencion",
  icon: "warning"
}
  constructor() { 
    this.alertCard = {
      title: "8 alertas pendientes",
      description: "Hay items que requieren su atencion",
      icon: "warning"
   }
  }

  ngOnInit() {

  }

}

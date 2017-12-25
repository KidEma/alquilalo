import { Component, OnInit, Input } from '@angular/core';
import { DashboardCard } from '../dashboard-card'

@Component({
  selector: 'app-dashboard-card',
  templateUrl: './dashboard-card.component.html',
  styleUrls: ['./dashboard-card.component.css']
})
export class DashboardCardComponent implements OnInit {
  @Input() content: DashboardCard

  constructor() {


  }

  ngOnInit() {

  }

}

import { Component, OnInit, Input } from '@angular/core';
import { PropertyToExpireModel } from '../../core/models/propertyToExpire.model';

@Component({
  selector: 'app-dashboard-list-container',
  templateUrl: './dashboard-list-container.component.html',
  styleUrls: ['./dashboard-list-container.component.css']
})
export class DashboardListContainerComponent implements OnInit {
@Input()
list: PropertyToExpireModel[]
  constructor() { }

  ngOnInit() {
   
  }

}

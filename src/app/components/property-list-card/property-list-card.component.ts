import { Component, OnInit, Input } from '@angular/core';
import { PropertyModel } from '../../core/models/property.model';

@Component({
  selector: 'app-property-list-card',
  templateUrl: './property-list-card.component.html',
  styleUrls: ['./property-list-card.component.css']
})
export class PropertyListCardComponent implements OnInit {

  @Input()
  content: PropertyModel;
  constructor() { }

  ngOnInit() {
  }

}

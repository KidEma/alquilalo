import { Component, OnInit, Input } from '@angular/core';
import { PropertyToExpireModel } from '../../core/models/propertyToExpire.model';

@Component({
  selector: 'app-list-card',
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.css']
})
export class ListCardComponent implements OnInit {
  private filepath: string;
  @Input()
  content: PropertyToExpireModel;

  constructor() { }

  ngOnInit() {
    this.filepath = './assets/images/properties/'

  }

}

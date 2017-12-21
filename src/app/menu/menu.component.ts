import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"; 

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  private linkClick: any;
  constructor(private router: Router) { }

  ngOnInit() {
    this.linkClick = (a) => {
        this.router.navigate([a]);
    }
  }  
}

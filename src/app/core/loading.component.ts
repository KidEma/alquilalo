// src/app/core/loading.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-loading',
  template: `
    <img src="/assets/images/loading-large.gif">
  `,
  styles: [`
    :host {
      display: block;
    }
    img {
      display: block;
      margin: 20px auto;
      width: 50px;
    }
  `]
})
export class LoadingComponent {
}
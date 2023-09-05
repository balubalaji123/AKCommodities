import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AKCommodities';
  constructor(public router:Router){}
  isAuthPage(){
    return this.router.url === '/login' || this.router.url=='/signup'
  }
}

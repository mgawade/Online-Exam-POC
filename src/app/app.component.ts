import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var module: {
  id: string;
};
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'MOB QA-TEST';
  constructor( private readonly router: Router) {}
  ngOnInit() {
  this.router.navigate(['login']);
  }

}

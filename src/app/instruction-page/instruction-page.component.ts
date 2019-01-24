import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-instruction-page',
  templateUrl: './instruction-page.component.html',
  styleUrls: ['./instruction-page.component.scss']
})
export class InstructionPageComponent implements OnInit {

  constructor(private readonly router: Router) { }

  ngOnInit() {
  }

  onStartTest () {
    this.router.navigate(['questions-page']);
  }

}

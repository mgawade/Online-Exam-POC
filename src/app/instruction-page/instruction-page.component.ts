import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-instruction-page',
  templateUrl: './instruction-page.component.html',
  styleUrls: ['./instruction-page.component.scss']
})
export class InstructionPageComponent implements OnInit {
  instructionsForm: FormGroup;

  constructor(private readonly router: Router,
    private readonly formBuilder: FormBuilder) { }

  ngOnInit() {
    this.instructionsForm = this.formBuilder.group({
      options: ['', [Validators.required]],
    });
  }

  onStartTest () {
    const opt = this.instructionsForm.get('options').value;
  window.console.log(opt);
  if (opt === 'Coding & Descriptive' || opt === 'Scenario') {
     const isMCQ = false;
     this.router.navigate(['questions-page', {isMCQ} ]);

  } else {
    const isMCQ = true;
     this.router.navigate(['questions-page', {isMCQ}]);
}
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-publish-test',
  templateUrl: './publish-test.component.html',
  styleUrls: ['./publish-test.component.scss']
})
export class PublishTestComponent implements OnInit {

  clickMessage = '';
  publishForm: FormGroup;
  constructor(private readonly formBuilder: FormBuilder,
              private readonly router: Router) { }

  ngOnInit() {
    this.publishForm = this.formBuilder.group({
      name: ['', Validators.required],
      difficultyLevel: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }
  publishTest() {
    console.warn(this.publishForm.value);
    this.clickMessage = 'Test Started Successfully';
    this.publishForm.reset();
    this.router.navigate(['instruction-page']);
  }

}

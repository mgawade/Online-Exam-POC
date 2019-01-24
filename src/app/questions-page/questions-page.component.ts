import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm, FormControl } from '@angular/forms';

@Component({
  selector: 'app-questions-page',
  templateUrl: './questions-page.component.html',
  styleUrls: ['./questions-page.component.scss']
})
export class QuestionsPageComponent implements OnInit {
  seconds: any = 60;
  minutes = 29;
  questionsForm: FormGroup;
  isSelected = false;
  constructor(private readonly formBuilder: FormBuilder) { }

  ngOnInit() {
    this.questionsForm =  new FormGroup({
      option: new FormControl ('', [Validators.required]),
    });
    this.getTime();
  }
  getTime() {
  setInterval(() => {
    this.getSecond();
      }, 1000);
}
getSecond () {
  if (this.seconds === 0 && this.minutes === 0) {
    window.alert('Time up!!');
  } else if (this.seconds === 0) {
    this.minutes = this.minutes - 1;
    this.seconds = 60;
  } else {
    this.seconds = this.seconds - 1;
  }
}

onChange() {
  const opt = this.questionsForm.get('option').value;
}
}

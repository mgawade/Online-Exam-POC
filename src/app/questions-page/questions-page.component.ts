import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-questions-page',
  templateUrl: './questions-page.component.html',
  styleUrls: ['./questions-page.component.scss']
})
export class QuestionsPageComponent implements OnInit {
  seconds: any = 60;
  minutes = 29;
  questionsForm: FormGroup;
  descriptiveQuestionsForm: FormGroup;
  isSelected = false;
  isMCQ: boolean;
  selectedCategory = this.route.snapshot.paramMap.get('isMCQ');
  constructor(private readonly formBuilder: FormBuilder,
    private readonly router: Router,
    private readonly route: ActivatedRoute,
  ) { }

  ngOnInit() {
   if (this.selectedCategory === 'true') {
      this.isMCQ = true;
   } else {
    this.isMCQ = false;
   }
    this.questionsForm = this.formBuilder.group({
      option: ['', [Validators.required]],
    });
    this.descriptiveQuestionsForm = this.formBuilder.group({
      answer: ['', [Validators.required]],
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
  window.console.log(opt);
}
onNextClick() {
  this.router.navigate(['descriptive-questions-page']);
}
}

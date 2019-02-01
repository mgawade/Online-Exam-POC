import { Component, OnInit } from '@angular/core';
import { StoreDataService } from '../services/store-data.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
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
  difficultyLevel;
  questions;
  que;
  i = 0;
  isMCQ: boolean;
  selectedCategory = this.route.snapshot.paramMap.get('isMCQ');
  constructor(private readonly formBuilder: FormBuilder,
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly storedata: StoreDataService
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
    this.questions = this.storedata.getQuestions();
    this.questions.forEach(question => {
      this.difficultyLevel = question.DifficultyLevel;
      if (this.difficultyLevel === this.storedata.getDifficultyLevel()) {
      this.i = this.i + 1;
      this.questions.forEach(que => {
        this.storedata.setSelectedQuestions(que);
        // console.log('AAAA', que);
      });
      }
    });
    // console.log(this.storedata.getDifficultyLevel(), 'Questions Are : ', + this.i);
    // console.log('questions', this.storedata.getSelectedQuestions());
    console.log(this.questions);
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
}

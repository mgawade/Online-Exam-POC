import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { StoreDataService } from '../services/store-data.service';

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
  difficultyLevel;
  questions;
  que;
  i = 0;
  constructor(private readonly storedata: StoreDataService) { }

  ngOnInit() {
    this.questionsForm =  new FormGroup({
      option: new FormControl ('', [Validators.required]),
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
}
}

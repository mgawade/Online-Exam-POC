import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreDataService {

  questions: string[] = [];
  difficultyLevel: string;
  selectedQuestions = [];
  setQuestions(question: string) {
    this.questions.push(question);
  }
  getQuestions() {
    return this.questions.pop();
  }
  setDifficultyLevel(value: string) {
    this.difficultyLevel = value;
  }
  getDifficultyLevel() {
    return this.difficultyLevel;
  }
  setSelectedQuestions(selectedQuestion: string) {
    this.selectedQuestions.push(selectedQuestion);
  }
  getSelectedQuestions() {
    return this.selectedQuestions.pop();
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as XLSX from 'ts-xlsx';
import { StoreDataService } from '../services/store-data.service';

@Component({
  selector: 'app-publish-test',
  templateUrl: './publish-test.component.html',
  styleUrls: ['./publish-test.component.scss']
})
export class PublishTestComponent implements OnInit {
  clickMessage = '';
  publishForm: FormGroup;
  arrayBuffer: any;
  file: File;
  questions;
  data1;
  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly router: Router,
    private readonly storedata: StoreDataService
  ) {}

  ngOnInit() {
    this.publishForm = this.formBuilder.group({
      name: ['', Validators.required],
      difficultyLevel: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      inputFile: ['', Validators.required]
    });
  }
  publishTest() {
    const fileReader = new FileReader();
    fileReader.onload = e => {
      this.arrayBuffer = fileReader.result;
      const data = new Uint8Array(this.arrayBuffer);
      const arr = new Array();
      for (let i = 0; i !== data.length; ++i) {
        arr[i] = String.fromCharCode(data[i]);
      }
      const bstr = arr.join('');
      const workbook = XLSX.read(bstr, { type: 'binary' });
      const first_sheet_name = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[first_sheet_name];
      this.questions = XLSX.utils.sheet_to_json(worksheet, { raw: true });
      this.storedata.setQuestions(this.questions);
    };
    fileReader.readAsArrayBuffer(this.file);
    this.storedata.setDifficultyLevel(this.publishForm.value.difficultyLevel);
    this.router.navigate(['instruction-page']);
  }

  incomingfile(event) {
    this.file = event.target.files[0];
  }
}

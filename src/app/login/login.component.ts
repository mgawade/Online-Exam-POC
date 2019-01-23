import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MysqlService } from '../services/mysql.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formdata;
  loginForm: FormGroup;
  constructor(private readonly formBuilder: FormBuilder,
              private readonly router: Router,
              public _mysqlService: MysqlService) { }

  ngOnInit() {
    this._mysqlService.getMysqlUsersDatas().subscribe((data) =>  {
      let res: any = data;
      res = res._body;
      res = JSON.parse(res);
      this.formdata = res[0];
    });
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', Validators.required],
    });
  }
  onLogin() {
    if (this.formdata.username === this.loginForm.value.username && this.formdata.password === this.loginForm.value.password) {
      this.router.navigate(['publish-test']);
    } else {
    alert('Invalid credentials');
    }
  }

}

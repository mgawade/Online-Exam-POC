import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable()
export class MysqlService {

  constructor(public _http: Http) {
  }
  public getMysqlUsersDatas() {
    return this._http.get('http://localhost:80/db.php');
  }
}



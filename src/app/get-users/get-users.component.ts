import { Component, OnInit } from '@angular/core';
import { User } from '../api/admin';
import { MysqlService } from '../services/mysql.service';
declare var module: {
  id: string;
};

@Component({
  moduleId: module.id,
  selector: 'app-get-users',
  templateUrl: './get-users.component.html',
  styleUrls: ['./get-users.component.css']
})
export class GetUsersComponent implements OnInit {
  usersMysql: User[];
  usersLocal = [];
  textLocal: String;

  constructor(private _mysqlService: MysqlService) { }

  ngOnInit() {
    this._mysqlService.getMysqlUsersDatas();
    this.getUsersMysql();
  }

  private getUsersMysql() {
    this._mysqlService.getMysqlUsersDatas()
      .subscribe(
        (res: any)  => this.usersMysql = res,
        err => console.error(err.status)
      );
  }
}

import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UsersService} from "../../services/users.service";
import {LoginService} from "../../services/login.service";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
  providers: [LoginService]
})
export class AccountComponent implements OnInit {


  constructor() {
  }

  ngOnInit() {
  }

  public onSetTo() {

  }
}

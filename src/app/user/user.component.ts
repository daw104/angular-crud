import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UsersService} from "../services/users.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  providers: [UsersService]
})
export class UserComponent implements OnInit {


  constructor() {
  }

  ngOnInit() {
  }

  public onAddUser() {

  }


}

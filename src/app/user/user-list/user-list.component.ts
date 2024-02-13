import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from "../../../model/User";
import {UsersService} from "../../services/users.service";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users: User[] = [];

  constructor(
    private _userService: UsersService
  ) {
  }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this._userService.getAllUsers().subscribe(
      users => {
        this.users = users;
        console.log(this.users);
      },
      error => {
        alert('error al obtener los datos');
      }
    );
  }

}

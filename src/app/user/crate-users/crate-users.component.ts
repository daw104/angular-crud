import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {User} from "../../../model/User";
import {UsersService} from "../../services/users.service";

@Component({
  selector: 'app-crate-users',
  templateUrl: './crate-users.component.html',
  styleUrls: ['./crate-users.component.scss']
})
export class CrateUsersComponent implements OnInit {
  user!: User;
  createUserForm: FormGroup;

  constructor(
    private _usersService: UsersService
  ) {
  }

  ngOnInit() {
    this.initCreateUserForm();
  }

  initCreateUserForm() {
    this.createUserForm = new FormGroup({
      'name': new FormControl(),
      'lastName': new FormControl(),
      'email': new FormControl(),
      'description': new FormControl(),
    });
  }

  onCreateUser() {
    console.log(this.createUserForm.value);
    const userBody: User = {
      userData: {
        name: this.createUserForm.value.name,
        lastName: this.createUserForm.value.lastName,
      },
      email: this.createUserForm.value.email,
      description: this.createUserForm.value.description,
    };
    console.log(userBody);
    this._usersService.createUser(userBody);
  }


}

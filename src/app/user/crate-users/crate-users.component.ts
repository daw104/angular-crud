import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Subject} from "rxjs";
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
  isLoading!: boolean;

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
    this.isLoading = true;
    const userBody: User = {
      userData: {
        name: this.createUserForm.value.name,
        lastName: this.createUserForm.value.lastName,
      },
      email: this.createUserForm.value.email,
      description: this.createUserForm.value.description,
    };
    this._usersService.createUser(userBody).subscribe({
      next: (response) => {
        this.createUserForm.reset();
        this._usersService.usersChanged.next();
        this.isLoading = false;
      },
      error: (error) => {
      }
    });
  }

  onCanelForm() {
    this.createUserForm.reset();
  }

}

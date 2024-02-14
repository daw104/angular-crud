import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MessageService} from "primeng/api";
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
    private _usersService: UsersService,
    private _messageService: MessageService
  ) {
  }

  ngOnInit() {
    this.initCreateUserForm();
  }

  initCreateUserForm() {
    this.createUserForm = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'lastName': new FormControl(null, Validators.required),
      'email': new FormControl(null, Validators.required),
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
        this._messageService.add({
          severity: 'success',
          summary: '',
          detail: `Usuario ${userBody.email} creado correctamente`
        });
      },
      error: (error) => {
      }
    });
  }

  onCanelForm() {
    this.createUserForm.reset();
  }

}

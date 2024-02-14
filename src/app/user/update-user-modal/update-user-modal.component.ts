import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {DynamicDialogConfig, DynamicDialogRef} from "primeng/dynamicdialog";
import {UsersService} from "../../services/users.service";

@Component({
  selector: 'app-update-user-modal',
  templateUrl: './update-user-modal.component.html',
  styleUrls: ['./update-user-modal.component.scss']
})
export class UpdateUserModalComponent implements OnInit {
  userId!: string;
  updateUserForm: FormGroup = this._fb.group({
    name: [],
    email: [],
    lastName: [],
    description: [],
  });


  constructor(
    private _config: DynamicDialogConfig,
    private _usersService: UsersService,
    private _fb: FormBuilder,
    private _dynamicDialogRef: DynamicDialogRef) {
  }

  ngOnInit() {
    this.userId = this._config.data.userId;
    this.getUserById();
  }

  getUserById() {
    this._usersService.getUserById(this.userId).subscribe({
      next: (response) => {
        this.updateUserForm.patchValue({
          lastName: response.userData?.lastName,
          name: response.userData?.name,
          email: response.email,
          description: response.description,
        });
      },
      error: (error) => {
      }
    });
  }

  onUpdateUser() {
    const body = {
      userData: {
        name: this.updateUserForm.value?.name,
        lastName: this.updateUserForm.value?.lastName,
      },
      email: this.updateUserForm.value.email,
      description: this.updateUserForm.value.description,
    }
    this._usersService.updateUserById(this.userId, body).subscribe({
      next: (response) => {
        this._dynamicDialogRef.close(true);
      },
      error: (error) => {
      }
    });
  }

  onCloseModal() {
    this._dynamicDialogRef.close(true);
  }

}

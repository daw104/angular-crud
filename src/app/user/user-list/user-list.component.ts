import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DialogService} from "primeng/dynamicdialog";
import {User} from "../../../model/User";
import {UsersService} from "../../services/users.service";
import {UpdateUserModalComponent} from "../update-user-modal/update-user-modal.component";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  userChangedSubscription = this._usersService.usersChanged$.subscribe(
    users => {
      this.getUsers()
    }
  );
  isLoading: boolean;

  constructor(
    private _usersService: UsersService,
    public dialogService: DialogService
  ) {
  }

  ngOnInit() {
    this.getUsers();
  }


  getUsers() {
    this.isLoading = true;
    this._usersService.getAllUsers().subscribe(
      users => {
        this.users = users;
        console.log(this.users);
        this.isLoading = false;
      }, error => {
        alert('error al obtener los datos');
      }
    );
  }

  onDeleteUser(userId: string) {
    console.log('userId: ', userId);
    this._usersService.deleteUser(userId).subscribe({
      next: (response) => {
        this._usersService.usersChanged.next();
      },
      error: (error) => {
      }
    });
  }

  openUpdateModal(userId: string) {

    this.dialogService.open(UpdateUserModalComponent, {
      data: {
        userId
      },
      header: 'Select a Product',
      width: '70%',
      contentStyle: {overflow: 'auto'},
      baseZIndex: 10000,
      maximizable: true,
    }).onClose.subscribe(() => {
      this._usersService.usersChanged.next();
    });

  }


}

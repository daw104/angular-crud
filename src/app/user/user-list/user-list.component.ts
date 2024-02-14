import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ConfirmationService, ConfirmEventType, MessageService} from "primeng/api";
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
    public dialogService: DialogService,
    private _messageService: MessageService,
    private _confirmationService: ConfirmationService
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
        this.isLoading = false;
      }, error => {
        if (error.status == 401) {
          this._messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: 'No estas autoizado para ver estos datos'
          });
          this.isLoading = false;
        } else {
          this._messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: `Ha ocurrido un error al obtener datos`
          });
          this.isLoading = false;
        }
      }
    );
  }

  onDeleteUser(userId: string) {
    this._confirmationService.confirm({
      message: 'Quieres eliminar este usuario?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      accept: () => {
        this._usersService.deleteUser(userId).subscribe({
          next: (response) => {
            this._usersService.usersChanged.next();
          },
          error: (error) => {
          }
        });
        this._messageService.add({severity: 'info', summary: 'Confirmed', detail: 'Usuario eliminado'});
      },
      reject: () => {
        this._messageService.add({severity: 'warn', summary: 'Cancelada', detail: 'Operación cancelada'});
      },
      acceptLabel: 'Si',
      rejectLabel: 'No'
    });
  }

  openUpdateModal(userId: string) {
    this.dialogService.open(UpdateUserModalComponent, {
      data: {
        userId
      },
      width: '70%',
      contentStyle: {overflow: 'auto'},
      baseZIndex: 10000,
      maximizable: true,
    }).onClose.subscribe(() => {
      this._usersService.usersChanged.next();
    });
  }
  
}

import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  newUser: string = '';
  @Output() userAdded = new EventEmitter<string>();
  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];

  public onAddUser() {
    this.userAdded.emit(this.newUser);
    this.newUser = '';
  }

  public onAccounAdded(newAccount: { name: string, status: string }) {
    this.accounts.push(newAccount);
  }

  public onStatusChanged(updateInfo: { id: number, newStatus: string }) {
    this.accounts[updateInfo.id].status = updateInfo.newStatus;
  }

}

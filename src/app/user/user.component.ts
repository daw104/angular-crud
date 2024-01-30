import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  newUser: string = '';
  @Output() userAdded = new EventEmitter<string>();

  public onAddUser() {
    this.userAdded.emit(this.newUser);
    this.newUser = '';
  }


}

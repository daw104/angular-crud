import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AccountService} from "../services/account.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  providers: [AccountService]
})
export class UserComponent implements OnInit {
  newUser: string = '';
  @Output() userAdded = new EventEmitter<string>();
  accounts: { name: string, status: string }[] = [];

  constructor(
    private _accountService: AccountService
  ) {
  }

  ngOnInit() {
    this.accounts = this._accountService.accounts;
  }

  public onAddUser() {
    this.userAdded.emit(this.newUser);
    this.newUser = '';
  }


}

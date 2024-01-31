import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AccountService} from "../../services/account.service";
import {LoginService} from "../../services/login.service";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
  providers: [LoginService]
})
export class AccountComponent implements OnInit {
  @Input() account: { name: string, status: string };
  @Input() id: number;

  constructor(
    private _loginService: LoginService,
    private _accountService: AccountService
  ) {
  }

  ngOnInit() {
  }

  public onSetTo(status: string) {
    this._accountService.updateStatus(this.id, status);
    this._loginService.logStatusChange(status);
    this._accountService.statusUpdated.emit(status);
  }
}

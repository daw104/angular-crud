import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {LoginService} from "../../services/login.service";

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.scss'],
  providers: [LoginService]
})
export class NewAccountComponent implements OnInit {
  @Output() accountAdded = new EventEmitter<{ name: string, status: string }>();

  constructor(
    private _loginService: LoginService
  ) {
  }

  ngOnInit() {
  }

  public onCreateAccount(accountName: string, accountStatus: string) {
    this.accountAdded.emit({
      name: accountName,
      status: accountStatus
    });
    this._loginService.logStatusChange(accountStatus);
  }

}

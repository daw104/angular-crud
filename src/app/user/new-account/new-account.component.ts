import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AccountService} from "../../services/account.service";
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
    private _loginService: LoginService,
    private _serviceAccount: AccountService,
  ) {
    this._serviceAccount.statusUpdated.subscribe(
      (status: string) => alert(`Nuevo status con la suscripción ${status}`)
    );
  }

  ngOnInit() {
  }

  public onCreateAccount(accountName: string, accountStatus: string) {
    this._serviceAccount.addAcount(accountName, accountStatus);
    this._loginService.logStatusChange(accountStatus);
  }

}

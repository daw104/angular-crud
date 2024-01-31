import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
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
  @Output() statusChanged = new EventEmitter<{ id: number, newStatus: string }>();

  constructor(
    private _loginService: LoginService
  ) {
  }

  ngOnInit() {
  }

  public onSetTo(status: string) {
    this.statusChanged.emit({id: this.id, newStatus: status});
    this._loginService.logStatusChange(status);
  }
}

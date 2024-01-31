import {EventEmitter, Output} from "@angular/core";

export class AccountService {
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

  statusUpdated = new EventEmitter<string>();

  addAcount(name: string, status: string) {
    this.accounts.push({
      name,
      status
    });
  }

  updateStatus(id: number, status: string) {
    this.accounts[id].status = status;
  }

}

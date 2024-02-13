import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class User {
  public name: string;
  public lastName: string;
  public email: string;
  public description: string;

  constructor(name: string, lastName: string, email: string, description: string) {
    this.name = name;
    this.lastName = lastName;
    this.email = email;
    this.description = description;

  }
}

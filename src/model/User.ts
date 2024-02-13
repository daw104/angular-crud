import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class User {
  id?: string;
  public userData: {
    name: string;
    lastName: string;
  }
  public email: string;
  public description: string;


}

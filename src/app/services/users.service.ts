import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {User} from "../../model/User";

@Injectable({
  providedIn: 'root'
})
export class UsersService {


  constructor(
    private _http: HttpClient
  ) {
  }

  createUser(userBody: User) {
    this._http.post<{ name: string }>(
      'https://angular-http-test-9940c-default-rtdb.firebaseio.com/users.json',
      userBody
    ).subscribe(responseData => {
      console.log(responseData);
    });
  }

  getAllUsers(): Observable<User[]> {
    return this._http.get('https://angular-http-test-9940c-default-rtdb.firebaseio.com/users.json')
      .pipe(
        map((responseData: { [key: string]: User }) => {
          const usersArray: User[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              usersArray.push({...responseData[key], id: key});
            }
          }
          return usersArray;
        })
      );
  }


}

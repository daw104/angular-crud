import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable, Subject} from "rxjs";
import {map} from "rxjs/operators";
import {User} from "../../model/User";

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  usersChanged = new Subject<User>();
  usersChanged$ = this.usersChanged.asObservable();

  constructor(
    private _http: HttpClient
  ) {
  }

  createUser(userBody: User) {
    return this._http.post<{ name: string }>(
      'https://angular-http-test-9940c-default-rtdb.firebaseio.com/users.json',
      userBody
    );
  }

  getAllUsers(): Observable<User[]> {
    return this._http.get('https://angular-http-test-9940c-default-rtdb.firebaseio.com/users.json')
      .pipe(
        map((responseData: { [key: string]: User }) => {
          return Object.keys(responseData).map(key => ({...responseData[key], id: key}));
        })
      );
  }


}

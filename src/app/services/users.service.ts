import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
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
      userBody,
      {
        headers: new HttpHeaders({'Custom-header': 'headerCustom'}),
      }
    );
  }

  getAllUsers(): Observable<User[]> {
    let searchParams = new HttpParams();
    searchParams = searchParams.append('print', 'pretty');
    searchParams = searchParams.append('custom', 'key'); //de esta manera concatenamos query params y mantenemos el anterior
    return this._http.get(
      'https://angular-http-test-9940c-default-rtdb.firebaseio.com/users.json',
      {
        params: searchParams
      }
    )
      .pipe(
        map((responseData: { [key: string]: User }) => {
          return Object.keys(responseData).map(key => ({...responseData[key], id: key}));
        })
      );
  }

  deleteUser(userId: string) {
    return this._http.delete(`https://angular-http-test-9940c-default-rtdb.firebaseio.com/users/${userId}.json`);
  }

  getUserById(userId: string): Observable<User> {
    return this._http.get<User>(`https://angular-http-test-9940c-default-rtdb.firebaseio.com/users/${userId}.json`);
  }

  updateUserById(userId: string, updatedUserData: User): Observable<any> {
    return this._http.patch<any>(`https://angular-http-test-9940c-default-rtdb.firebaseio.com/users/${userId}.json`, updatedUserData);
  }

}

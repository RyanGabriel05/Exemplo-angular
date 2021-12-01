import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url = "http://localhost:3000/login";
  // httpOptions = { headers: new HttpHeaders({ "content-type": 'application/json' }) }

  constructor(private httpClient: HttpClient) { }

  login(user: User): Observable<any> {
    return this.httpClient.post(this.url, JSON.stringify(user), {
      headers:new HttpHeaders({ 'content-type': 'application/json' }),
      observe: "response"
    })
  }

  // cadastrar(user: User): Observable<any> {
  //   return this.httpClient.post(this.url + "register", JSON.stringify(user), {
  //     headers:new HttpHeaders({ 'content-type': 'application/json' }),
  //     observe: "response"
  //   })
  // }

}

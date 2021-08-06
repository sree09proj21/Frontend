import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  server_address:string='/api' ;
  constructor(public http:HttpClient) { }
  newUser(user:any)
  {
    return this.http.post(`${this.server_address}/signup`,user)
      }
getUser()
{
  return this.http.get(`${this.server_address}/users`)
}
getuser(id:any)
{
  return this.http.get(`${this.server_address}/user/`+id)
 }


}

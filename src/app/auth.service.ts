import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  server_address:string='/api'
  constructor(public http:HttpClient) { }
  loginUser(user:any){
return this.http.post<any>(`${this.server_address}/login`,user)
  }
}

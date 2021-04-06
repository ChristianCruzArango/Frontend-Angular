import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { RolInterface } from './../interfaces/rol';
import { UserInterface } from './../interfaces/user';

import { environment } from './../../environments/environment';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  options: any;

  constructor(private http:HttpClient) {

    this.options = {
      headers: new HttpHeaders({
        Accept: 'application/json',
        'X-Requested-With':'XMLHttpRequest'
      })
    };

  }

  /* Get */

  getRoles():Observable<any>
  {
    return this.http.get<RolInterface>(`${URL}/codesa/roles`,this.options)
  }

  getUsers():Observable<any>{
    return this.http.get<UserInterface>(`${URL}/codesa/users`,this.options)
  }


  /* Crud */

  createUser(user:UserInterface):Observable<any>{
    return this.http.post<UserInterface>(`${URL}/codesa/create/users`,user,this.options)
  }


  /* Update */
  updateUser(user:UserInterface):Observable<any>{
    return this.http.post<UserInterface>(`${URL}/codesa/update/users`,user,this.options)
  }


  /* Delete */
  deleteUser(id:number):Observable<any>{
    return this.http.get<boolean>(`${URL}/codesa/delete/users?id=${id}`,this.options)
  }

  /*Search */
  searchUser(id:number):Observable<any>{
    return this.http.get<UserInterface>(`${URL}/codesa/show/users?id=${id}`,this.options)
  }

}

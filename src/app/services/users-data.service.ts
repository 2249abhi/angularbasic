import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersDataService {

  url = "https://random-data-api.com/api/v2/users";
  constructor(private http:HttpClient) { }

  users()
  {
    return this.http.get(this.url);   
  }
}

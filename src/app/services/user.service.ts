import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getAllUsers() {
    return this.http.get('http://jsonplaceholder.typicode.com/users');
  }
  getuser(id: number) {
    return this.http.get('http://jsonplaceholder.typicode.com/users/' + id);
  }
}

import {Injectable} from '@angular/core';
import {User} from '../models/user.model.client';
import {Http, Response} from '@angular/http';
import "rxjs/Rx";
import {environment} from "../../environments/environment";

@Injectable()
export class UserService {

  constructor(private http: Http){}

  baseUrl = environment.baseUrl;
  /*users: User[] = [
    new User('123', 'alice', '123', 'Alice', 'Wonder' ),
    new User('234', 'bob', 'bob', 'bob', 'Marley'),
    new User('345', 'charlie', 'charlie', 'charlie', 'Garcie'),
    new User('456', 'jannunzi', 'jannunzi', 'Jose', 'Annunzi')
  ];*/

  /*api = {
    'createUser'   : this.createUser,
    'findUserById' : this.findUserById,
    'findUserByUsername' : this.findUserByUsername,
    'findUserByCredentials' : this.findUserByCredentials,
    'updateUser' : this.updateUser,
    'deleteUser' : this.deleteUser
  };*/

  createUser(user: User) {
    const url = this.baseUrl + '/api/user';
    return this.http.post(url, user).map((response: Response) => {
      return response.json();
    })
  }

  findUserById(userId) {
    return this.http.get(this.baseUrl + '/api/user/' + userId)
      .map((response: Response) => {
        return response.json();
      });
  }

  findUserByUsername(username: String) {
    return this.http.get(this.baseUrl + '/api/user?username=' + username)
      .map((response: Response) => {
        return response.json();
      });
  }

  findUserByCredentials(username, password) {
    console.log(this.baseUrl + '/api/user?username=' + username + '&password=' + password);
    return this.http.get(this.baseUrl + '/api/user?username=' + username + '&password=' + password)
      .map((response: Response) => {
        console.log(response.json());
        return response.json();
      });
  }


  updateUser(user) {
    const url = this.baseUrl + '/api/user/' + user._id;
    return this.http.put(url, user).map((response: Response) => {
      return response.json();
    });
  }

  deleteUser(userId: String) {
    return this.http.delete(this.baseUrl + '/api/user/' + userId)
      .map((response: Response) => {
        return response.json();
      });
  }
}

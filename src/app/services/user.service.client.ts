import { User } from '../models/user.model.client';
import {Injectable} from '@angular/core';

@Injectable()
export class UserService {
  users: User[] = [
    new User('123', 'alice', '123', 'Alice', 'Wonder' ),
    new User('234', 'bob', 'bob', 'bob', 'Marley'),
    new User('345', 'charlie', 'charlie', 'charlie', 'Garcie'),
    new User('456', 'jannunzi', 'jannunzi', 'Jose', 'Annunzi')
  ];

  api = {
    'createUser'   : this.createUser,
    'findUserById' : this.findUserById,
    'findUserByUsername' : this.findUserByUsername,
    'findUserByCredentials' : this.findUserByCredentials,
    'updateUser' : this.updateUser,
    'deleteUser' : this.deleteUser
  };

  createUser(user: User) {
    this.users.push(new User(user._id, user.username, user.password, user.firstName, user.lastName));
  }

  findUserById(userId: String) {
    return this.users.find(function(user){
      return user._id === userId;
    });
  }

  findUserByUsername(username: String) {
    return this.users.find( function (user){
      return user.username === username;
    });
  }

  findUserByCredentials(username: String, password: String) {
    return this.users.find( function (user){
       return user.username === username && user.password === password;
    });
  }

  updateUser(userId, user: User) {
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i]._id === user._id) {
        this.users[i].username = user.username;
        this.users[i].firstName = user.firstName;
        this.users[i].lastName = user.lastName;
        return this.users[i];
      }
    }
  }

  deleteUser(userId: String) {
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i]._id === userId) {
        this.users.slice(i, 1);
      }
    }
  }

  isValidId(userId) {
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i]._id === userId) {
        return false;
      } else return true;
    }
  }
}

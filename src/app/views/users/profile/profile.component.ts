import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../../services/user.service.client';
import {User} from '../../../models/user.model.client';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: User;
  username: String;
  firstName: String;
  lastName: String;
  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router) { }


  updateUser(user) {
    console.log(user);
    this.route.params.subscribe(params => {
      return this.userService.updateUser(user).subscribe(
        (user: User) => {
          this.user = user;
        }
      );
    });
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: any) => {
          const userId = params['uid'];
          return this.userService.findUserById(userId).subscribe(
            (user: User) => {
              this.user = Object.assign({}, user);
              this.username = this.user['username'];
              this.firstName = this.user['firstName'];
              this.lastName = this.user['lastName'];
            }
          );
        }
      );
  }

}

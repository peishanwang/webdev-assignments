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
  userId: String;
  username: String;
  firstName: String;
  lastName: String;
  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router) { }


  updateUser(user) {
    console.log(user);
    this.user = this.userService.updateUser(this.userId, user);
    //this.router.navigate(['/user', user._id]);
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: any) => {
          this.userId = params['userId'];
          const originalUser = this.userService.findUserById(params['uid']);
          //create a copy of user
          this.user = Object.assign({}, originalUser);
          this.username = this.user['username'];
          this.firstName = this.user['firstName'];
          this.lastName = this.user['lastName'];
        }
      );
  }

}

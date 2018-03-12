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
  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
    ) {
  }

  updateUser() {
    //console.log(user);
    this.route.params.subscribe(params => {
      this.userService.updateUser(this.user).subscribe();
    });
  }

  deleteUser() {
    this.userService.deleteUser(this.user._id).subscribe((status) => {
      this.router.navigate(['/login']);
    });
  }

  ngOnInit() {
    this.route.params.subscribe((params: any) => {
          const userId = params['uid'];
          return this.userService.findUserById(userId).subscribe(
            (user: User) => {
              this.user = user;
              //console.log(user);
            }
          );
        }
      );
  }

}

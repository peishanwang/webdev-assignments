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
    this.userService.deleteUser(this.userId).subscribe((status) => {
      this.router.navigate(['/login']);
    });
  }

  ngOnInit() {
    this.route.params.subscribe((params: any) => {
          this.userId = params['uid'];
          return this.userService.findUserById(this.userId).subscribe(
            (user: User) => {
              this.user = user;
              //console.log(user);
            }
          );
        }
      );
  }

}

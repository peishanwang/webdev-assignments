import {Component, OnInit, ViewChild} from '@angular/core';
import { Router} from '@angular/router';
import {UserService} from '../../../services/user.service.client';
import {User} from '../../../models/user.model.client';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('f') loginForm: NgForm;
  username: String;
  password: String;
  errorFlag: boolean;
  errorMsg = 'Invalid username or password !';

  constructor(
    private userService: UserService,
    private router: Router) { }

  login() {
    this.username = this.loginForm.value.username;
    this.password = this.loginForm.value.password;
    this.userService.findUserByCredentials(this.username, this.password)
      .subscribe(
        (user) => {
          if (user) {
            this.router.navigate(['user/', user._id ]);
          } else {
            this.errorFlag = true;
          }
        },
        (error: any) => {
          //this.errorFlag = true;
          alert(this.errorMsg);
        }
      );
  }

  ngOnInit() {
  }

}

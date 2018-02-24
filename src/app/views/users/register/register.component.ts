import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {User} from "../../../models/user.model.client";
import {UserService} from "../../../services/user.service.client";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @ViewChild('f') registerForm: NgForm;
  username: String;
  password: String;
  confirmPassword: String;
  userId: String;
  errorFlag: boolean;
  errorMsg = 'Invalid username or password !';

  constructor(
    private userService: UserService,
    private router: Router) { }

  register() {
    this.username = this.registerForm.value.username;
    this.password = this.registerForm.value.password;
    this.confirmPassword = this.registerForm.value.confirmPassword;

    if (this.password == this.confirmPassword) {
      this.addNewUser();
      this.router.navigate(['user/', this.userId]);
    } else {
      alert(this.errorMsg);
    }
  }

  addNewUser() {
    do {
      this.userId = Math.random() + "";
    } while (!this.userService.isValidId(this.userId));
    const user = new User(this.userId, this.username, this.password, undefined, undefined);
    this.userService.createUser(user);
  }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../shared/auth.service";


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

  Signup(value){
    console.log(value.email,value.password,value);
    this.authService.SignUp(value.email, value.password)
  }

}

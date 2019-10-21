import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../shared/auth.service";
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

  emailLogin(value){
    // console.log(value);
    this.authService.SignIn(value.email,value.password)
  }

}

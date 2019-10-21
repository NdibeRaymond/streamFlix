import { Component,OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { AuthService } from "./shared/auth.service";
import {MoviesService} from './shared/movies.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ng-netflixClone';

  constructor(public authService:AuthService,private moviesService: MoviesService,public router: Router){

  }

  ngOnInit(){
    
  }

  moviesSearch(fields){
     this.router.navigate([`/search/${fields.searchTerm}`]);
  }

  isLoggedIn(){
    return this.authService.isLoggedIn()
  }

  getUserEmail(){
    return this.authService.getUserEmail()
  }

  signOut(){
    this.authService.SignOut()
  }

}

import {Component,OnInit} from '@angular/core';
import {MoviesService} from '../movies/movies.service';


@Component({
  selector:'favorite_page',
  template:`
  <section class="event-caurosel" >
  <div style="display:block;height:200px"></div>
  <div class="container">
    <h1 class="text-uppercase mx-4 gold">Favorite Movies</h1>
    <div class="row mx-4">
      <div class="event p-0 col-lg-4 col-md-6 col-12" *ngFor="let each_movie of favorite_movies ">
      <thumbnail [movie]="each_movie"></thumbnail>
      </div>

    </div>
  </div>
  </section>
  `
})


export class FavoritePageComponent implements OnInit{

  favorite_movies;
  movies;

 constructor(public moviesService: MoviesService){

 }

 ngOnInit(){

   this.movies = this.moviesService.getMovies();
   this.favorite_movies = this.getFavorites();

 }

 getFavorites(){
   let favorites_id = this.moviesService.getFavoritesId();

   let favorite_movies = [];

   for(let index in favorites_id){
    let movie = this.movies.filter(movie=>movie.id === favorites_id[index]);

    if(movie.length !== 0){
    favorite_movies.push(movie[0]);
       }
   }

   return favorite_movies;

 }


}

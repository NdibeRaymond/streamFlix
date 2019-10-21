import {Component,OnInit} from '@angular/core';

import {MoviesService} from '../shared/movies.service';

@Component({
  selector:'home',
  templateUrl:'./home.component.html'
})

export class HomeComponent implements OnInit {

  movies:any[];
  categories:any[];
  randomId:any[];
  randomRecommendedId:any[];
  newReleaseId:any[];

  constructor(private moviesService: MoviesService){
  }

  ngOnInit(){
    this.movies = this.moviesService.getMovies();
    this.categories = this.moviesService.getCategories();
    this.randomId = this.getRandomId().slice(0,6);
    this.randomRecommendedId = this.getRandomId().slice(0,9);
    this.newReleaseId = this.getRandomId().slice(0,6);
  }


  getRandomId = () => {
    let id_arr = [];

    for(let i = 0; i < 10 ; i++){
      let id =  Math.floor(Math.random() * (this.movies.length + 1 - 0) + 0);
      id_arr.push(id)
    };
    return id_arr;

  }

}

import { Component, OnInit } from '@angular/core';
import {MoviesService} from '../shared/movies.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  category:any[];
  movies:any[]
  moviesInCategory:any[];

  constructor(private moviesService: MoviesService,private route: ActivatedRoute) { }

  ngOnInit() {
    this.movies = this.moviesService.getMovies();
    this.moviesInCategory = this.getMoviesInCategory(this.movies);
  }

  getMoviesInCategory=(movies)=>{
    this.category = this.route.snapshot.params['name'].toLowerCase();
    let result = movies.filter(movie=>{
      if(Array.isArray(movie.genre)){

        let arr = movie.genre.filter(genre=>genre.toLowerCase()===this.category)
        return arr.length !== 0
      }
    })
    return result

  }

}

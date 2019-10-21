import { Component, OnInit } from '@angular/core';
import {MoviesService} from '../shared/movies.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories:any[];

  constructor(private moviesService: MoviesService) { }

  ngOnInit() {
    this.categories = this.moviesService.getCategories();
  }

}

import {Component,EventEmitter,Input,Output} from '@angular/core';

import {MoviesService} from './movies.service';


@Component({
  selector:'favorite',
  template:`
  <span (click)="toggleFavorite(id)">
  <i *ngIf="isFavorite(id)" class="p-1 pointable float-right fa fa-heart" style="color:red;font-size:1.5em"></i>
  <i *ngIf="!isFavorite(id)" class="p-1 pointable float-right fa fa-heart-o" style="color:white;font-size:1.5em"></i>
  </span>
  `
})


export class FavoriteComponent {
  @Input() id;
  // @Input() isFavorite:boolean;
  // @Output() toggleFavorite = new EventEmitter();
  //
  // onClick(){
  //   this.toggleFavorite.emit({})
  // }

  constructor(public moviesService: MoviesService){

  }

  toggleFavorite(id){
    this.moviesService.toggleFavorite(id)
  }

  isFavorite(id){
    return this.moviesService.isFavorite(id)
  }
}

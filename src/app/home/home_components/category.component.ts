import {Component,Input} from '@angular/core';

@Component({
  selector:"category",
  template:`
  <a class="white" [routerLink]="['/categories',category.name]">
  <p class="text-uppercase mx-4">{{category.name}}</p>
    <img class="event-img m-2" [src]="category.image" alt="">
    </a>
  `
})


export class CategoryComponent{
  @Input() category:any;

  constructor(){

  }

}

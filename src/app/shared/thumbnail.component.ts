import {Component,Input} from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector:'thumbnail',
  template:`
  <div class="top_div">{{formatter(movie.genre).substring(0,48)}}<favorite [id]="movie.id"></favorite></div>

  <img width="100%" height="90%" [routerLink]="['/movies',movie.id,'details']" [src]="sanitizer.bypassSecurityTrustResourceUrl(movie.thumbnail)">
  <div class="bottom_div font-weight-bold">{{movie.title.substring(0,40)}} ...</div>
  `,
  styles:[`
    div.top_div{
      height:15%;
      background-color:black;
      color:white;
  }
  div.bottom_div{
    width:100%;
    bottom:-15px;
    position:absolute;
    padding-bottom:5px;
    padding-left:5px;
    background-color:black;
    color:white;
    z-index:10;
  }
    `]
})

export class ThumbnailComponent{

@Input() movie;

constructor(public sanitizer: DomSanitizer){

}

formatter=(value)=>{
  return value.join(" | ")
}

}

import {Component,Input,OnInit} from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector:"recommended",
  template:`
  <div class="img-wrap" pointable [routerLink]="['/movies',recommended.id,'details']">
  <div class="banner pt-2 font-weight-bold" style="width:95%;height:75%;position:absolute;z-index:10;margin:0">
  {{recommended.title}}
  </div>
    <img height="100%" width="100%" [src]="sanitizer.bypassSecurityTrustResourceUrl(recommended.thumbnail)">
  </div>
  <figcaption class="info-wrap">
    <p class="title gold text-center m-0">{{formatter(recommended.genre).substring(0,18)}}

    <favorite [id]="recommended.id"></favorite>

     </p>
  </figcaption>
  `,
  styles:[
    `
    div.banner{
      background-color: rgba(245, 195, 8,0);
      color: rgba(0,0,0,0);
    }

    div.banner:hover{
      background-color: rgba(245, 195, 8,0.7);
      color: rgba(0,0,0,1);
    }

    `
  ]

})


export class RecommendedComponent implements OnInit{

  @Input() recommended:any;


  constructor(private sanitizer: DomSanitizer){

}

ngOnInit(){

}


formatter=(value)=>{
  return value.join(" | ")
}

}

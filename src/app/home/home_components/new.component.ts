import {Component,Input} from "@angular/core";
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector:"new-release",
  template:`
  <div class="banner  p-2 font-weight-bold" [routerLink]="['/movies',newRelease.id,'details']" style="width:95%;height:75%;position:absolute;z-index:10;margin:0">
  {{newRelease.title}}
  </div>
  <img height="80%" width="100%" [src]="sanitizer.bypassSecurityTrustResourceUrl(newRelease.thumbnail)">
  <div>{{formatter(newRelease.genre).substring(0,13)}} <favorite [id]="newRelease.id"></favorite></div>
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


export class NewReleaseComponent{
  @Input() newRelease:any[];
  constructor(private sanitizer: DomSanitizer){

  }
  formatter=(value)=>{
    return value.join(" | ")
  }
}

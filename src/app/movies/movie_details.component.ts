import {Component,OnInit,OnDestroy} from '@angular/core';
import {ActivatedRoute,Router,NavigationEnd} from '@angular/router';

import {MoviesService} from '../shared/movies.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';



@Component({
  selector:"movie-details",
  template:`
  <section class="cartegories">
    <div style="display:block;height:200px"></div>
    <div class="container-fluid">
      <div class="row">

        <div class="events col-lg-8 col-md-8 col-sm-12">
        <iframe height="400px" width="100%" [src]="sanitizer.bypassSecurityTrustResourceUrl(movie.link)" frameBorder="0" allowFullScreen=""></iframe>
        <favorite [id]="movie.id"></favorite>
        <h2>{{movie.title}}</h2>
         </div>

          <div class="community col-lg-4 col-md-4 col-sm-12" style="width:100%" id="new-releases">
          <p class="text-uppercase gold">New Releases</p>
          <div class="row">
            <div class="user-profile p-2 mx-1 mb-3 col-lg-5 col-md-5 col-sm-5 col-12" *ngFor="let id of newReleaseId">
              <new-release [newRelease]="movies[id]"></new-release>
            </div>
          </div>
          </div>

        </div>
      </div>
  </section>

 <section class="more pl-2 py-5 pr-2">
 <div class="container">
   <div class="row">
     <div class="col-lg-12 col-md-12 col-12" id="recommended">
       <p class="text-uppercase gold">Recommended</p>
       <div class="row">
         <div class="pl-0 col-lg-3 col-md-3 col-sm-6 col-12" *ngFor="let id of randomRecommendedId">
           <figure class="card event-card">
             <recommended [recommended]="movies[id]"></recommended>
           </figure>
         </div>
       </div>
     </div>
   </div>
 </div>
 </section>

  `,
  styles:[
    `
    `
  ]
})

export class MovieDetailsComponent implements OnInit,OnDestroy {

    movie;
    movies;
    navigationSubscription;
    randomRecommendedId;
    newReleaseId;

  constructor(public sanitizer: DomSanitizer, public moviesService: MoviesService,
    private route: ActivatedRoute,
     private router:Router){

       this.navigationSubscription = this.router.events.subscribe((e: any) => {
       // If it is a NavigationEnd event re-initalise the component
       if (e instanceof NavigationEnd) {
         this.getMoviesAgain();
       }
     })
     }

     ngOnInit(){
       let id = +this.route.snapshot.params['id'];
       this.movies = this.moviesService.getMovies();
       this.movie = this.getMovie(id);
       this.randomRecommendedId = this.getRandomId();
       this.newReleaseId = this.getRandomId().slice(0,6);
       console.log("inside on init: ",id);
       console.log(this.movies);
       console.log(this.randomRecommendedId);
       console.log(this.movie)
     }

     getRandomId = () => {
       let id_arr = [];

       for(let i = 0; i < 15 ; i++){
         let id =  Math.floor(Math.random() * (this.movies.length + 1 - 0) + 0);
         id_arr.push(id)
       };
       return id_arr;

     }

     getMoviesAgain(){
       let id = +this.route.snapshot.params['id'];
       this.movies = this.moviesService.getMovies();
       this.movie = this.getMovie(id);
       this.randomRecommendedId = this.getRandomId().slice(0,15);

     }

     getMovie(id){
       let result =  this.movies.filter(movie=>movie.id === id);
       if (result.length !== 0){
         return result[0]
       }
       else{
         return null
       }
     }

     ngOnDestroy() {
       // avoid memory leaks here by cleaning up after ourselves. If we
       // don't then we will continue to run our initialiseInvites()
       // method on every navigationEnd event.
       if (this.navigationSubscription) {
          this.navigationSubscription.unsubscribe();
       }
     }
}

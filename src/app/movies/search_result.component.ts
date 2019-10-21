import {Component,OnInit,OnDestroy} from '@angular/core';
import {ActivatedRoute,Router,NavigationEnd} from '@angular/router';

import {MoviesService} from '../shared/movies.service';
import {SearchService} from '../shared/search.service';

// declare let NavigationEnd:any;

@Component({
  selector:"search_result",
  template:`
  <section class="event-caurosel">
    <div style="display:block;height:200px"></div>
  <div class="container">
    <h1 class="text-uppercase mx-4 gold">Search Results</h1>
    <p class="mx-4">{{search_results.length}} results found for {{searchTerm}}</p>
    <div class="row mx-4">
      <div class="event p-0 col-lg-4 col-md-6 col-12" *ngFor="let movie of search_results ">
      <thumbnail [movie]="movie"></thumbnail>
      </div>

    </div>
  </div>
  </section>

  `
})


export class SearchResultComponent implements OnInit,OnDestroy {
  searchTerm:any;
  movies:any[];
  search_results:any[];
  navigationSubscription;


  constructor(private moviesService: MoviesService,private route: ActivatedRoute,
     private router:Router, private searchService: SearchService){

    this.navigationSubscription = this.router.events.subscribe((e: any) => {
    // If it is a NavigationEnd event re-initalise the component
    if (e instanceof NavigationEnd) {
      this.initialiseSearch();
    }
  })
  }

  ngOnInit(){
    this.movies = this.moviesService.getMovies();
    this.search_results = this.search();
  }

  initialiseSearch(){
    this.movies = this.moviesService.getMovies();
    this.search_results = this.search();
  }


  search(){
    let searchTerm = this.route.snapshot.params['searchTerm'];
    this.searchTerm = searchTerm;
    return this.searchService.Search(searchTerm,this.movies);
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

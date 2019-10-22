import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import { environment } from '../environments/environment';

import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';


import { AppComponent } from './app.component';
import {HomeComponent} from './home/home.component';
import {ThumbnailComponent} from './shared/thumbnail.component';
import {CategoryComponent} from './home/home_components/category.component';
import {RecommendedComponent} from './home/home_components/recommended.component';
import {NewReleaseComponent} from './home/home_components/new.component';
import {CategoriesComponent} from './categories/categories.component';
import {MoviesComponent} from './movies/movies.component';
import {SearchResultComponent} from './movies/search_result.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import {FavoriteComponent} from './shared/favorite.component';
import {FavoritePageComponent} from './movies/favoritepage.component';
import {MovieDetailsComponent} from './movies/movie_details.component';
import {_NotFoundComponent} from './shared/notfound.component';

import {MoviesService} from './shared/movies.service';
import {SearchService} from './shared/search.service';
import {AuthService} from './shared/auth.service';




import {appRoutes} from './routes';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ThumbnailComponent,
    CategoryComponent,
    RecommendedComponent,
    NewReleaseComponent,
    MoviesComponent,
    SearchResultComponent,
    CategoriesComponent,
    LoginComponent,
    SignupComponent,
    FavoriteComponent,
    FavoritePageComponent,
    MovieDetailsComponent,
    _NotFoundComponent
  ],
  imports: [
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, {onSameUrlNavigation: "reload"}),
  ],
  providers: [
    MoviesService,
    AuthService,
    SearchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

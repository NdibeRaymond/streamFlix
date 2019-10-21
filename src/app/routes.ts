import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {CategoriesComponent} from './categories/categories.component';
import {MoviesComponent} from './movies/movies.component';
import {SearchResultComponent} from './movies/search_result.component';
import {SignupComponent} from './auth/signup/signup.component';
import {LoginComponent} from './auth/login/login.component';
import {FavoritePageComponent} from './shared/favoritepage.component';
import {MovieDetailsComponent} from './movies/movie_details.component';


export const appRoutes:Routes = [
  {path:"movies/:id/details",component:MovieDetailsComponent,runGuardsAndResolvers:"always"},
  {path:"categories/:name",component:MoviesComponent},
  {path:"categories",component:CategoriesComponent},
  {path:"",component:HomeComponent},
  {path:"signup",component:SignupComponent},
  {path:"login",component:LoginComponent},
  {path:"favorites",component:FavoritePageComponent},
  {path:"search/:searchTerm",component:SearchResultComponent,runGuardsAndResolvers: "always"}
]

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { JsonpModule } from '@angular/http';
import { HttpModule } from '@angular/http';
import { MoviesComponent } from './components/movies/movies.component';
import { MovieComponent } from './components/movie/movie.component';
import { AppComponent }  from './app.component';
import { routing, appRoutingProviders } from './app.routes';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [ BrowserModule, HttpModule, JsonpModule, FormsModule, routing, RouterModule ],
  declarations: [ AppComponent, MoviesComponent, MovieComponent ],
  providers: [ appRoutingProviders ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

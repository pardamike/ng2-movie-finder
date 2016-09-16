import { ModuleWithProviders } from '@angular/core';
import { Router, Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from './components/movies/movies.component';
import { MovieComponent } from './components/movie/movie.component';

const appRoutes: Routes = [
    { path: 'movie/:id', component: MovieComponent},
    { path: '', component: MoviesComponent },
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
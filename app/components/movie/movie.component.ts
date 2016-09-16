import { Component } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'movie',
    templateUrl: 'movie.component.html',
    providers: [MovieService]
})
export class MovieComponent {

    movie: Object;
    video: Object;

    constructor(private router:ActivatedRoute, private _movieService: MovieService) {

    }

    ngOnInit() {
        this.router.params.subscribe((params) => {
            let id = params['id'];
            this._movieService.getMovie(id).subscribe(movie => {
                console.log(movie);
                this.movie = movie;
            });
        });
    }

 }

import { Injectable } from '@angular/core';
import { Jsonp } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class MovieService {
    apiKey: string;
    currentDate: Date;

    constructor(private _jsonp:Jsonp) {
        this.apiKey = 'c4500494e4c1329fb597497b6708a20e';
        this.currentDate = new Date();
    }

    getPopular() {
        return this._jsonp.get('https://api.themoviedb.org/3/discover/movie?callback=JSONP_CALLBACK&sort_by=popularity.desc&api_key=' + this.apiKey)
            .map(res => res.json());
    }

    getInTheaters() {
        return this._jsonp.get('https://api.themoviedb.org/3/discover/movie?callback=JSONP_CALLBACK&primary_release_date.gte='
        +this.currentDate.getFullYear()+'-'+this.currentDate.getMonth()+'-'+this.currentDate.getDate()+'&primary_release_date.lte='
        +this.currentDate.getFullYear()+'-'+(this.currentDate.getMonth()+1)+'-'+this.currentDate.getDate()+'&sort_by=popularity.desc&api_key=' + this.apiKey)
            .map(res => res.json());
    }

    searchMovies(searchStr: string) {
        return this._jsonp.get('https://api.themoviedb.org/3/search/movie?callback=JSONP_CALLBACK&query='+searchStr+'&sort_by=popularity.desc&api_key=' + this.apiKey)
            .map(res => res.json());
    }

    getMovie(id: string) {
        return this._jsonp.get('https://api.themoviedb.org/3/movie/'+id+'?callback=JSONP_CALLBACK&api_key=' + this.apiKey)
            .map(res => res.json());
    }

    getVideos(id: string) {
        return this._jsonp.get('https://api.themoviedb.org/3/movie/'+id+'/videos?callback=JSONP_CALLBACK&api_key=' + this.apiKey)
            .map(res => res.json());
    }
}
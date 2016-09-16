"use strict";
var router_1 = require('@angular/router');
var movies_component_1 = require('./components/movies/movies.component');
var movie_component_1 = require('./components/movie/movie.component');
var appRoutes = [
    { path: 'movie/:id', component: movie_component_1.MovieComponent },
    { path: '', component: movies_component_1.MoviesComponent },
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routes.js.map
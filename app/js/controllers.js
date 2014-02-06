'use strict';

var CONFIG = {
    debugger: true,
}

var app = angular.module('myApp', ['myApp.services']);

app.controller('SearchCtrl', ['$scope', 'MovieDB', function($scope, MovieDB){
    $scope.searchText = "";
    $scope.movies = [];

    function refreshSuggestions(newValue, oldValue, scope){
        if (newValue.length > 2){
            MovieDB.searchMovies(newValue).then(function(result){
                $scope.movies = result;
            });
        }
    }


    $scope.$watch('searchText', refreshSuggestions);

}]);

app.controller('ListCtrl', function($scope, $http){
    //$scope.filterService = filterService;
    /*var API_URL = 'http://private-7a36d-themoviedb.apiary.io/3/search/movie';
    var API_KEY = '7eb8a270ce7fb702f7ff21edab06e7a8';
    $scope.movies;
    $http.get(API_URL, {
        params: {
            api_key: API_KEY,
            query: 'the',
            search_type: 'ngram',
            //rnd: Math.random(),   // prevent cache
            //page: 1,
        },
    }).then(function(result){
        $scope.movies = (result);

    });*/

});



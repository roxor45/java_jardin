function ArtistsController($scope, $http) {
    IMAGE_ROOT = "http://rabidgadfly.com/assets/angular/dataload/";
    DEFAULT_IMAGE = "blank.gif";
    
    $scope.selectedArtist = "";
    $scope.selectedArtistImage = IMAGE_ROOT + DEFAULT_IMAGE;
    
    $http.get('artists.json').success(function(data) {
        $scope.artists = data;
    });

    $scope.setSelectedArtist = function(artist) {
        $scope.selectedArtist = artist;
        if( artist.image ) {
          $scope.selectedArtistImage = IMAGE_ROOT + artist.image;
        } else {
          $scope.selectedArtistImage = IMAGE_ROOT + DEFAULT_IMAGE;
        }
    };

}
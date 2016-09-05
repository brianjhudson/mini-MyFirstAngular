angular.module('friends').
controller('friendsCtrl', function($scope){
  $scope.friends = [
    'Theo'
    , 'Will'
    , 'Amee'
    , 'Anil'
  ];
  $scope.addFriend = function(friend) {
    $scope.friends.push(friend);
  }

});

angular.module('orderByExample2', [])
.controller('IPLController', ['$scope', function($scope) {
  var friends = [
    {name: 'Virat',   team: 'RCB',  season: '2020', runs:400, wickets:0},
    {name: 'ABD',   team: 'RCB',  season: '2020', runs:332, wickets:0},    
    {name: 'MS Dhoni',   team: 'CSK',  season: '2020', runs:440, wickets:0},   
    {name: 'Jadeja',   team: 'CSK',  season: '2020', runs:200, wickets:10},
    {name: 'Bumrah',   team: 'MI',  season: '2020', runs:50, wickets:11},
];
  $scope.propertyName = 'runs';
  $scope.reverse = true;
  $scope.friends = friends;
  $scope.sortBy = function(propertyName) {
    $scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : false;
    $scope.propertyName = propertyName;
  };
}]);
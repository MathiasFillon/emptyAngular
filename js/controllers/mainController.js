// MAIN CONTROLLER
angular.module('app', [])

    .controller('mainController', function($scope){

        $scope.objets = [];

        $scope.add = function() {           
          $scope.objets.push({name: $scope.addObjet.name, last: $scope.addObjet.last, mail: $scope.addObjet.mail});
        };
    });




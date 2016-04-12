angular.module("jogo", []).controller("dados", function($scope, $interval, $timeout) {

$scope.numerosort = [];
$scope.msg = "";
$scope.qtd = 1;
$scope.conta = 0;


$scope.jogar = function (){
  var cont = $scope.qtd;
  var continua = true;
if ($scope.qtd <= 0){

  continua = false;
  $scope.msg = "Digite um numero maior que 0."
}
if (continua){

for (var i = 0; i < cont; i++) {
  $scope.numerosort[i] = Math.floor((Math.random() * 6));

  var x = 0;
  if ($scope.numerosort[i] == 0){$scope.numerosort[i] = "img/um.png"; x = 1;}
  if ($scope.numerosort[i] == 1){$scope.numerosort[i] = "img/dois.png";x = 2;}
  if ($scope.numerosort[i] == 2){$scope.numerosort[i] = "img/tres.png";x = 3;}
  if ($scope.numerosort[i] == 3){$scope.numerosort[i] = "img/quatro.png";x = 4;}
  if ($scope.numerosort[i] == 4){$scope.numerosort[i] = "img/cinco.png";x = 5;}
  if ($scope.numerosort[i] == 5){$scope.numerosort[i] = "img/seis.png";x = 6;}
  $scope.conta = $scope.conta + x;
  }
}
  continua = true;
}



$scope.conectar = function () {

 return "Conectado com o Java Script... OK....";
}
});

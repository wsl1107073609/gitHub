angular.module("MyApp",[])
       .controller("userCtrl",function($scope){
			$scope.fName = "";
			$scope.lName = "";
			$scope.passw1 = "";
			$scope.passw2 = "";
			$scope.users = [
							{id:1, fName:"Hege1",lName:"Pege1"},
							{id:2, fName:"Hege2",lName:"Pege2"},
							{id:3, fName:"Hege3",lName:"Pege3"},
							{id:4, fName:"Hege4",lName:"Pege4"}
						   ];
			$scope.edit = true;
			$scope.error = false;
			$scope.incomplete = false;

			$scope.editUser = function(id){
				if(id === "new"){
					$scope.edit = true;
					$scope.incomplete = true;
					$scope.fName = "";
					$scope.lName = "";
				}else{
					$scope.edit = false;
					$scope.fName = $scope.users[id-1].fName;
					$scope.lName = $scope.users[id-1].lName;
				}
			};

			/******watch is the function of scope, it is used to listen the input whehter is valid******/
			$scope.$watch("passw1",function(){
				$scope.test();
			});
			$scope.$watch("passw2",function(){
				$scope.test();
			});
			$scope.$watch("fName",function(){
				$scope.test();
			});
			$scope.$watch("lName",function(){
				$scope.test();
			});

			$scope.test = function(){
				/***validate the password***/
				if($scope.passw1 !== $scope.passw2){
					$scope.error = true;
				}else{
					$scope.error = false;
				}

				$scope.incomplete = false;
				/****if the length of fName/lName/password1/password2 is 0, the return is ture****/
				if ($scope.edit && (!$scope.fName.length || !$scope.lName.length || !$scope.passw1.length || !$scope.passw2.length)) {
					$scope.incomplete = true;
				};

			};



});
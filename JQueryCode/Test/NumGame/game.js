		// test:固定的特殊数
		//var specialNum = [3,5,7]; 

		//方法1：使用while和push来生成特殊数
		specialNum = [];
		while(specialNum.length < 3){
			var r = Math.floor(Math.random()*9+1);
			if(specialNum.indexOf(r) == -1){
				specialNum.push(r);
			}
		}

		//方法2：调用getSpecNum()方法来生成特殊数
		//var specialNum =  getSpecNum(); 
		

		var sayWord = ["Fizz","Bizz","Whizz"];
		
		for(var m=1;m<=100;m++){
			var result = "";
			if (m.toString().indexOf(specialNum[0].toString()) != -1) {
				result += sayWord[0];
			}
			else{
				for(var i=0;i<3;i++){
					if (m%specialNum[i] == 0) {
						result += sayWord[i];						
					}					
				}
				if(result == ""){
					result += m;
				}	
			}
			document.write(result + "</br>");
		}

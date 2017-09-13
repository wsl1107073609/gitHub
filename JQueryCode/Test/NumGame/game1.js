function rand(m,n){
	return Math.floor(Math.random()*n+m);
}
function getSpecNum(){
	specNum = [];
	for(var i=0;i<3;i++){
		num = rand(1,9);
		if(specNum.indexOf(num) == -1){
			specNum[i] = num;
		}
		else{
			i = i -1;
		}
	}
	return specNum;
}

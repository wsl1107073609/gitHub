function validate(thisform){
	
	//从login.html中获取数据
	var userName = document.getElementById('inputSuccess3').value;
	var userPassword = document.getElementById('inputGroupSuccess2').value;

	//json数据
    /*
	var data=[
				{
					username:"123456",
					password:"123456",
				},
				{
					username:"wang",
					password:"123456",
				},
				{
					username:"zhang",
					password:"123456",
				}
			];
	*/

	$.getJSON('file/user.json',function(data){
	
		//var data = eval('(' + data1 + ')');

		//循环遍历数据
		for(var i in data){
			if (data[i].username == userName && data[i].password == userPassword) {	
				//just open a new html, not refresh the html
				//window.open("main.html"); 

				//open a new html and refresh the html
				alert("login success!");				
				//self.location.href = "/main.html";  //error error ？？？？？？？？？
				break;
			}
			else{			
				if (i == data.length-1) {
					alert("user is not exist!");
				};
				continue;
			};
		
	    }



	});



}
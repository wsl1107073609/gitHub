/***
功能：该js主要实现的是nextPage、previousPage、FirstPage、LastPage以及GoTOPage等几个页脚的显示和跳转,（适用于单页请求显示和全部数据请求完之后的情况）
参数：
1. 加载页脚的div 
2. 数据的总数目  groupListCount
3. 每页需要显示的数目 pageSize
说明：
1.pagination1()：函数为单页请求函数，即每次向后台发送请求获取当页的数据
2.dataDisplay()：数据已经读取完毕之后的函数，此处只需显示当前页显示的数据即可
3.如果使用的是pagination1()，不需要传入其他的参数，否则，需要传入数据data
***/
/*(function($){
	$.fn.typewriter = function(tableDiv,paginationDiv,groupListCount,pageSize,currentPage,countPage,data){
		var pageBody = "<span class='pagination-info' id='showRecords' style='color:#EC8026;'>"+"Showing " + ((currentPage-1)*pageSize+1) + " to " + (currentPage*pageSize) + " of " + groupListCount + " rows"+"</span>&nbsp;&nbsp;"
						+ "<a  href='#' id='btn11' onclick='btn11Click()'><span class='glyphicon glyphicon-backward'  style='font-size:10px;color:#EC8026;' title='first page'></sapn></a>&nbsp;"
					    + "<a  href='#' id='btn21' onclick='btn21Click()'><span class='glyphicon glyphicon-chevron-left'  style='font-size:10px;color:#EC8026;' title='previous page'></span></a>&nbsp;"
					    + "<span id='btn01' class='badgeTemp1' style='width:20px;display: inline-block;min-width: 80px;padding: 3px 7px;font-size: 12px;font-weight: bold;line-height: 1;text-align: center;white-space: nowrap;vertical-align: baseline;background-color: #EC8026;border-radius: 5px;'  title='current page'>"+currentPage+"/"+countPage+"</span>&nbsp;"
					    + "<a  href='#' id='btn31' onclick='btn31Click()'><span class='glyphicon glyphicon-chevron-right' style='font-size:10px;color:#EC8026;' title='next page'></span></a>&nbsp;"
					    + "<a  href='#' id='btn41' onclick='btn41Click()'><span class='glyphicon glyphicon-forward'  style='font-size:10px;color:#EC8026;'  title='last page'></sapn></a>&nbsp;&nbsp;"
						+ "<input id='changePage1' type='text' size='1' maxlength='4' style='width:30px;height:20px'/><a  href='#' id='btn51' onclick='btn51Click()'  style='color:#EC8026;font-size:14px;' title='jump'>GO</a>"
		$("#"+paginationDiv).html(pageBody);

		dataDisplay(tableDiv,paginationDiv,groupListCount,pageSize,currentPage,countPage,data); 

	}
})(jQuery); */

var tableDiv,paginationDiv,groupListCount,pageSize,currentPage,countPage,data;	

function typewriter(tableDiv1,paginationDiv1,groupListCount1,pageSize1,currentPage1,countPage1,data1){
	tableDiv = tableDiv1;
	paginationDiv = paginationDiv1;
	groupListCount = groupListCount1;
	pageSize = pageSize1;
	currentPage =currentPage1;
	countPage = countPage1;
	data = data1;

	var pageBody = "<span class='pagination-info' id='showRecords' style='color:#EC8026;'>"+"Showing " + ((currentPage-1)*pageSize+1) + " to " + (currentPage*pageSize) + " of " + groupListCount + " rows"+"</span>&nbsp;&nbsp;"
						+ "<a  href='#' id='btn11' onclick='btn11Click()'><span class='glyphicon glyphicon-backward'  style='font-size:10px;color:#EC8026;' title='first page'></sapn></a>&nbsp;"
					    + "<a  href='#' id='btn21' onclick='btn21Click()'><span class='glyphicon glyphicon-chevron-left'  style='font-size:10px;color:#EC8026;' title='previous page'></span></a>&nbsp;"
					    + "<span id='btn01' class='badgeTemp1' style='width:20px;display: inline-block;min-width: 80px;padding: 3px 7px;font-size: 12px;font-weight: bold;line-height: 1;text-align: center;white-space: nowrap;vertical-align: baseline;background-color: #EC8026;border-radius: 5px;'  title='current page'>"+currentPage+"/"+countPage+"</span>&nbsp;"
					    + "<a  href='#' id='btn31' onclick='btn31Click()'><span class='glyphicon glyphicon-chevron-right' style='font-size:10px;color:#EC8026;' title='next page'></span></a>&nbsp;"
					    + "<a  href='#' id='btn41' onclick='btn41Click()'><span class='glyphicon glyphicon-forward'  style='font-size:10px;color:#EC8026;'  title='last page'></sapn></a>&nbsp;&nbsp;"
						+ "<input id='changePage1' type='text' size='1' maxlength='4' style='width:30px;height:20px'/><a  href='#' id='btn51' onclick='btn51Click()'  style='color:#EC8026;font-size:14px;' title='jump'>GO</a>"
	$("#"+paginationDiv).html(pageBody);

	dataDisplay(tableDiv,paginationDiv,groupListCount,pageSize,currentPage,countPage,data); 
}

//first page
function btn11Click(){
	if(currentPage === 1){
		return;
	}else{
		currentPage = 1;
		//pagination1(1);  
		dataDisplay(tableDiv,paginationDiv,groupListCount,pageSize,currentPage,countPage,data); 
	}
}		
		
//last page
function btn41Click(){
	if(currentPage === countPage){
		return;
	}else{
		currentPage = countPage;
		//pagination1(countPage);
		dataDisplay(tableDiv,paginationDiv,groupListCount,pageSize,currentPage,countPage,data);
	}
}
	    
//previous page
function btn21Click(){
	if(currentPage === 1){
	    return;
	}else{
	    //pagination1(currentPage-1);
	    currentPage = currentPage-1;
	    dataDisplay(tableDiv,paginationDiv,groupListCount,pageSize,currentPage,countPage,data);
	}
}
	    
//next page
function btn31Click(){
	if(currentPage === countPage){
	    return;
	}else{
	    //pagination1(currentPage+1);
	    currentPage = currentPage + 1;
	    dataDisplay(tableDiv,paginationDiv,groupListCount,pageSize,currentPage,countPage,data);
	}

}

//go page	    
function btn51Click(){
	var inputPage = $("#changePage1").val();
	if (!/^[1-9]\d*$/.test(inputPage)) {
	    alert("Input parameter error.");
	    return ;
	}
	if (inputPage > countPage) {
	    alert("Input parameter error.");
	    return ;
	}
	//pagination1(inputPage);
	currentPage = inputPage;
	dataDisplay(tableDiv,paginationDiv,groupListCount,pageSize,currentPage,countPage,data);
}

function dataDisplay(tableDiv,paginationDiv,groupListCount,pageSize,currentPage,countPage,data){

	$("#btn01").html(currentPage+"/"+countPage);
	
	$("#"+tableDiv).empty();
	var tbody = "<table border='1' style='width:30%;'><thead><tr><td>Id</td><td>Name</td><td>Age</td></tr></thead><tbody>";
	if(currentPage === countPage){
		$("#showRecords").html("Showing " + ((currentPage-1)*pageSize+1) + " to " + groupListCount + " of " + groupListCount + " rows");
		for(var i=(currentPage-1)*pageSize;i<groupListCount;i++){
			var str = "";
			str = "<tr><td>"+data[i].Id+"</td><td>"+data[i].Name+"</td><td>"+data[i].Age+"</td></tr>";
			tbody += str;
		}

	}else{
		$("#showRecords").html("Showing " + ((currentPage-1)*pageSize+1) + " to " + (currentPage*pageSize) + " of " + groupListCount + " rows");
		for(var i=(currentPage-1)*pageSize;i<currentPage*pageSize;i++){
			var str = "";
			str = "<tr><td>"+data[i].Id+"</td><td>"+data[i].Name+"</td><td>"+data[i].Age+"</td></tr>";
			tbody += str;
		}
	}		
	tbody += "</tbody></table>";
	$("#"+tableDiv).html(tbody);
}
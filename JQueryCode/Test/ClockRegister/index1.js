var x;
//方法一
//var myCars = new Array();
//myCars[0] = "BMW";
//myCars[1] = "BENCHI";
//myCars[2] = "BINLI";
//方法二
var myCars = ["BMW","BENCHI","BINLI"];
for(x in myCars){
document.write(myCars[x] + "<br>");
}
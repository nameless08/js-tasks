'use strict'
var p = /^[0-9]$/mg;
//var p = /[0-9]/g;
var str = "1\r\n2\r\n3\r\nстрока\r\n4";
//var str = "1<br />2<br />3<br />строка<br />4";
var arr = str.match(p);
document.write(arr.join(", "));
document.write("<br />");
document.write("Fox");
document.write("<br />");
document.write("<br />");

var p2 = /[0-9]([0-9]+)/g;
var str2 = "2001, 2002, 2003, 2004";
str2 = str2.replace(p2, function(s, x){
	document.write(x + ", ");
	var n = parseInt(s);
	n += 10;
	return n + "";
});
document.write("<br />" + str2);
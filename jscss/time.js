function showTime() { 
	var currentDate = new Date(); 
	var startDate = new Date(2021, 06, 08);
	var date3 = currentDate-startDate;
	var days=Math.floor(date3/(24*3600*1000));
	var leave1=date3%(24*3600*1000);     //����������ʣ��ĺ�����
	var hours=Math.floor(leave1/(3600*1000));
	var leave2=leave1%(3600*1000);        //����Сʱ����ʣ��ĺ�����
	var minutes=Math.floor(leave2/(60*1000));
	var leave3=leave2%(60*1000);          //�����������ʣ��ĺ�����
	var seconds=Math.round(leave3/1000);
	if (minutes < 10) 
	minutes = "0" + minutes; 
	if (seconds < 10) 
	seconds = "0" + seconds; 
	var currentTimeString = "Dear ***:<br>"
		+ "*********************************:<br> "
		+ "&nbsp&nbsp&nbsp&nbsp&nbsp"
		+ "<c style=\"color: #CCFF99; text-shadow:2px 3px 3px #222; font-family:Microsoft YaHei; font-size:24px\" >" + days +" </c>day " 
		+ "<c style=\"color: #CCFF99; text-shadow:2px 3px 3px #222; font-family:Microsoft YaHei; font-size:24px\" >" + hours+" </c>hour "
		+"<c style=\"color: #CCFF99; text-shadow:2px 3px 3px #222; font-family:Microsoft YaHei; font-size:24px\" >" + minutes+" </c>min "
		+"<c style=\"color: #CCFF99; text-shadow:2px 3px 3px #222; font-family:Microsoft YaHei; font-size:24px\" >" +seconds+" </c>sec<br>"
        +"时分秒我乱加的，是不是很高级^_^(点击图片↑还可切换哦<br>"
		+	"<c style=\"color: #CCCCCC; text-shadow:2px 3px 3px #222; font-family:Microsoft YaHei; font-size:20px\" >----ZRH   2022-05-17</c>"; 
	document.getElementById("show").innerHTML=currentTimeString;  //����ط�
	window.setTimeout("showTime()", 1000); 
} 

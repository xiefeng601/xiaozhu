var x,y;		//��굱ǰ��ҳ���ϵ�λ��
var step=10;	//�ַ���ʾ��࣬Ϊ�˺ÿ���step=0���ַ���ʾû�м��
var message="Thanks for watching❤ ";		//�������Ҫ��ʾ���ַ���
message=message.split("");	//���ַ����ָ�Ϊ�ַ�����

var xpos=new Array()		//�洢ÿ���ַ���xλ�õ�����
for (i=0;i<message.length;i++) {
	xpos[i]=-50;
}
var ypos=new Array()		//�洢ÿ���ַ���yλ�õ�����
for (i=0;i<message.length;i++) {
	ypos[i]=-50;
}

for (i=0;i<message.length;i++) {  //��̬������ʾÿ���ַ�span���,
	//ʹ��span������ַ�����Ϊ�˷���ʹ��CSS�����������ɵľ��Զ�λ
	document.write("<span id='span"+i+"' class='spanstyle'>");
	document.write(message[i]);
	document.write("</span>");
}

if (document.layers){
	document.captureEvents(Event.MOUSEMOVE);
}

function handlerMM(e){ //���¼��õ��������ҳ���ϵ�λ��
	e=e||window.event;
	x = (document.layers) ? e.pageX : document.body.scrollLeft+e.clientX-220;
	y = (document.layers) ? e.pageY : document.body.scrollTop+e.clientY-35;
}

function makesnake() {  //�ض�λÿ���ַ���λ��
	if (document.all) { //�����IE
		for (i=message.length-1; i>=1; i--) {
			xpos[i]=xpos[i-1]+step;  //��β��ͷȷ���ַ���λ�ã�ÿ���ַ�Ϊǰһ���ַ�����ʷ��ˮƽ����+step�����
            //�������Ź���ƶ��¼������ܵõ�һ����̬�Ĳ���״����ʾЧ��
			ypos[i]=ypos[i-1];  //��ֱ����Ϊǰһ�ַ�����ʷ����ֱ�����꣬��һ���ַ�����ǰһ���ַ��˶�
		}
		xpos[0]=x+step //��һ���ַ�������λ�ý��������
		ypos[0]=y
		//������㷨����֤�����������ƶ�����λ�ã�����������makenake����ʹ��Щ�ַ�һ����һ�����ƶ�����λ��
		// ���㷨��ʾ�ַ������е�����������ж���һ���� 
	
		for (i=0; i<=message.length-1; i++) {
			var thisspan = eval("span"+(i)+".style");  //����eval�����ַ����õ����ַ�����ʾ�Ķ���
			thisspan.posLeft=xpos[i];
			thisspan.posTop=ypos[i];
		}
	}
	else{
		for (i=message.length-1; i>=1; i--) {
			xpos[i]=xpos[i-1]+step;
			ypos[i]=ypos[i-1];
		}
		xpos[0]=x+step;
		ypos[0]=y;
		for (i=0; i<=message.length-1; i++) {
			var thisspan = document.getElementById("span"+i).style;
			thisspan.left=xpos[i];
			thisspan.top=ypos[i];
		}
	}
	var timer=setTimeout("makesnake()",10)  //����10����Ķ�ʱ������������makesnake(),ʱ��ˢ����ʾ�ַ�����λ�á�
}
document.onmousemove = handlerMM;
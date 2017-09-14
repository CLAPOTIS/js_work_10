var content=document.getElementsByClassName("content")[0];
var btn=document.getElementsByClassName("btn")[0];
btn.onclick=function(){
	var input=content.value;
	if(input===''){
		alert("*请输入QQ号码");
	}else{
		if(typeof Number(input)!=='number'||isNaN(Number(input))){
			alert("*QQ号码必须为数字");
		}else{
			if(input.indexOf('0')===0){
				alert("*不能以0开头");
			}
			if(input.indexOf('.')>-1){
				alert("*不能是小数");
			}
			if(input.length<5||input.length>10){
				alert("*输入的数字必须在5位以上、10位以内");
			}
		}		
	}	
}
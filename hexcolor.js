function hex(){
	var a=document.querySelector('body');
	var b=document.querySelector('#clr');

	var sum='';
	var len=6;
	var char='ABCDEF1234567890';
	var charlen=char.length;
	for(i=1;i<=len;i++){
		sum=sum+char.charAt(Math.floor(Math.random()*charlen));
	}
	var c=b.innerHTML='#'+sum;
	a.style.backgroundColor=c;
}
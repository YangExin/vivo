var $back = document.querySelector(".back");
window.onscroll = function(){
	var top = document.documentElement.scrollTop || document.body.scrollTop;
	if(top > 500){
		$back.style.display = "block";
	}
}

$back.onclick = function(){
	var timer = setInterval(function(){
		var top = document.documentElement.scrollTop || document.body.scrollTop;
		top -= 100;
		if(top <= 0){
			top = 0;
			clearInterval(timer);
		}
		document.documentElement.scrollTop = top;
	},10)	
}
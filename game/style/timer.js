var add = document.getElementById("timeout");
var tmax = add.dataset.time;
var tob = 100;
var del = Math.round(( 100/tmax));
var address  = add.dataset.addres;
move();
function move() {
	var width = 1;
	var id = setInterval(frame,  10);
	function frame(){
		console.log (width/tob/tmax);
		if (width >= 100) {clearInterval(id); location.href =(address);
		}else{
			width= width +del/tob;
			document.getElementById("tbar").style.width = width + '%';
			}
		}
	
	
}

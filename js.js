var doc = document
var chas = 0;
var min1 = 0;
var min2 = 0;
var sec1 = 0;
var sec2 = 0;
var mil = 0;
var interval
var stopInterval
var date = new Date(0, 0);

var wrap = doc.createElement('div');
wrap.style.cssText = 'background-color: yellowgreen;height:300px;width:960px;margin: 0 auto;'
doc.body.appendChild(wrap);

var divSpan = doc.createElement('div');
	divSpan.innerHTML = '<span></span><span></span> <span></span><span></span> <span></span><span></span> <span></span>'
	divSpan.style.cssText = 'margin: 0 auto;width:100px;padding: 50px 0 50px 25px;'
	divSpan.className = 'lead';
	divSpan.children[0].innerHTML = chas;
	divSpan.children[2].innerHTML = min1;
	divSpan.children[3].innerHTML = min2;
	divSpan.children[4].innerHTML = sec1;
	divSpan.children[5].innerHTML = sec2;
	divSpan.children[6].innerHTML = mil + '00';
	wrap.appendChild(divSpan);

	var start = doc.createElement('button');
	start.className = 'btn btn-warning';
	start.innerHTML = 'Start / Pause';
	start.style.cssText = 'margin: 0 auto;display: block;';
	wrap.appendChild(start);

	var clear = doc.createElement('button');
	clear.className = 'btn btn-primary'
	clear.innerHTML = 'Clear';
	clear.style.cssText = 'margin: 0 auto;display: block;width:107px';
	wrap.appendChild(clear);

function str() {
	interval = setInterval(go, 1);
				start.removeEventListener('click', str);
				start.addEventListener('click', stopp);
	start.innerHTML = 'Pause';
	start.className = 'btn btn-danger'

	function stopp() {
	stopInterval = clearInterval(interval);
	start.addEventListener('click', str);
	start.innerHTML = 'Start';
	start.className = 'btn btn-success';
	};

	function go(){

		date.setMilliseconds(date.getMilliseconds() + 4);
		var mil = date.getMilliseconds();
		divSpan.children[0].innerHTML = chas;
		divSpan.children[2].innerHTML = min1;
		divSpan.children[3].innerHTML = min2;
		divSpan.children[4].innerHTML = sec1;
		divSpan.children[5].innerHTML = sec2;
		divSpan.children[6].innerHTML = mil;

		if(mil >= 996){
			sec2++;
			mil = 0;
		}
		if(sec2 == 10){
			sec1++;
			sec2 = 0;
		}
		if(sec1 == 6){
			min2++;
			sec1 = 0;
		}
		if(min2 == 10){
			min1++;
			min2 = 0;
		}
		if(min1 == 6){
			chas++;
			min1 = 0;
		}
		if(chas == 24){
			chas = 0;
		};
	};
};

start.addEventListener("click", str);
clear.addEventListener("click", clr);

function clr() {
	start.innerHTML = 'Start';
	start.addEventListener("click", str);
	clearInterval(interval);
	 chas = 0;
	 min1 = 0;
	 min2 = 0;
	 sec1 = 0;
	 sec2 = 0;
	 mil = 0;

    divSpan.children[0].innerHTML = chas;
	divSpan.children[2].innerHTML = min1;
	divSpan.children[3].innerHTML = min2;
	divSpan.children[4].innerHTML = sec1;
	divSpan.children[5].innerHTML = sec2;
	divSpan.children[6].innerHTML = mil + '00';
	date = new Date(0, 0);
};










 


































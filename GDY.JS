
/* Side Menu*/
function toggleMenu(){
    var menu = document.getElementById("side-menu");
    if (menu.style.height === "100%") {
        menu.style.height = "0";
    } else {
        menu.style.height = "100%";
    }
}

/*Carrossel*/
var slides=['Chuva SP.jpg', 'G20.jpg', 'Aeroporto SP.jpg']

var tam = slides.length
var satual = 0
var tmpslider

function trocaAutomatica(){
	satual++
	if(satual >= tam){
		satual =0
	}
	document.querySelector('#carrossel').style.backgroundImage=`url('${slides[satual]}')`
}

function iniciaSlider(){
	document.querySelector('#carrossel').style.backgroundImage=`url('${slides[satual]}')`
	tmpslider=setInterval(trocaAutomatica,2000)
}

function parar(){
	clearInterval(tmpslider)
}

function troca(dir){
	satual += dir
	if(satual < 0){
		satual = 2
	}else if(satual >= tam){
		satual = 0
	}
		document.querySelector('#carrossel').style.backgroundImage=`url('${slides[satual]}')`
		clearInterval(tmpslider)
	}
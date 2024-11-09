
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
/*var slides=['Chuva SP.jpg', 'G20.jpg', 'Aeroporto SP.jpg']*

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
	}*/

	let currentIndex = 0;
	const slides = document.querySelectorAll('.carrossel .slide');
	
	function showSlide(index) {
		slides.forEach((slide, i) => {
			slide.classList.toggle('active', i === index);
		});
	}
	
	function nextImage() {
		currentIndex = (currentIndex + 1) % slides.length;
		showSlide(currentIndex);
	}
	
	function prevImage() {
		currentIndex = (currentIndex - 1 + slides.length) % slides.length;
		showSlide(currentIndex);
	}
	
	// Função para rotação automática
	function autoRotate() {
		nextImage();
		setTimeout(autoRotate, 3000); // Muda a imagem a cada 3 segundos
	}
	
	// Inicia a rotação automática quando a página carrega
	window.onload = autoRotate;
	
	// Função para pegar a imagem e a descrição de cada slide
	function getCarouselData() {
		const data = [];
		slides.forEach(slide => {
			const img = slide.querySelector('img').src;
			const description = slide.querySelector('.description').textContent;
			data.push({ img, description });
		});
		return data;
	}

console.log(getCarouselData());

// Função para abrir o modal com imagem e descrição
function openModal(imageSrc, title, description) {
    const modal = document.getElementById("imageModal");
    const modalImage = document.getElementById("modalImage");
    const modalTitle = document.getElementById("modalTitle");
    const modalDescription = document.getElementById("modalDescription");

    modalImage.src = imageSrc;
    modalTitle.textContent = title;
    modalDescription.textContent = description;

    modal.style.display = "flex";
}

// Função para fechar o modal
function closeModal() {
    const modal = document.getElementById("imageModal");
    modal.style.display = "none";
}

// Fechar o modal ao clicar fora da área de conteúdo
window.onclick = function(event) {
    const modal = document.getElementById("imageModal");
    if (event.target === modal) {
        closeModal();
    }
}

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
	
	function autoRotate() {
		nextImage();
		setTimeout(autoRotate, 3000);
	}
	
	window.onload = autoRotate;
	
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

function expandCard(card){
	card.style.transform ='scale(1.10)'
	card.style.boxShadow = '0 0 0 0 rgba(0,0,0,0.4)'
}

function shrinkCard(card){
	card.style.transform ='scale(1)'
	card.style.boxShadow = 'none'
}

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
// Inicializa o Swiper
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1, // Exibir apenas um slide por vez
    spaceBetween: 0, // Espaço entre os slides
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    // Adicione outras opções de configuração conforme necessário
});

// Função para descartar o slide atual
document.getElementById('discard-button').addEventListener('click', function() {
    // Remove o slide atual
    swiper.removeSlide(swiper.activeIndex);
    // Se houver mais slides, navega para o próximo
    if (swiper.slides.length > 0) {
        swiper.slideNext();
    }
});

// Função para curtir o slide atual
document.getElementById('like-button').addEventListener('click', function() {
    // Adicione a lógica para curtir aqui (ex: enviar para o servidor)
    console.log('Slide curtido:', swiper.activeIndex);
    // Remove o slide atual
    swiper.removeSlide(swiper.activeIndex);
    // Se houver mais slides, navega para o próximo
    if (swiper.slides.length > 0) {
        swiper.slideNext();
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const swiper = new Swiper('.swiper-container', {
        // Configurações do Swiper
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
        },
    });

    document.getElementById('like-button').addEventListener('click', () => {
        const currentSlide = swiper.slides[swiper.activeIndex];
        const imgSrc = currentSlide.querySelector('img').src;
        const title = currentSlide.querySelector('.title').textContent;
        const caption = currentSlide.querySelector('.caption').textContent;

        // Recupera fotos curtidas do armazenamento local
        let likedPhotos = JSON.parse(localStorage.getItem('likedPhotos')) || [];

        // Verifica se a foto já está na lista de curtidas
        const photoExists = likedPhotos.some(photo => photo.src === imgSrc);

        if (!photoExists) {
            // Adiciona foto à lista de curtidas
            likedPhotos.push({ src: imgSrc, title, caption });
            localStorage.setItem('likedPhotos', JSON.stringify(likedPhotos));
        }
    });

    document.getElementById('discard-button').addEventListener('click', () => {
        swiper.slideNext();
    });
});


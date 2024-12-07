// gallery.js

// Seleciona os elementos relevantes
const galleryItems = document.querySelectorAll('.image-total'); // Atualizado para selecionar os elementos corretos
const seeMoreBtn = document.getElementById('seeMoreBtn');
let visibleItems = 6; // Número de imagens inicialmente visíveis

// Função para mostrar as próximas imagens
function showMoreItems() {
    let totalItems = galleryItems.length;

    // Mostra até mais 6 itens
    for (let i = visibleItems; i < visibleItems + 6; i++) {
        if (i < totalItems) {
            galleryItems[i].style.display = 'block';
        }
    }

    // Atualiza o número de itens visíveis
    visibleItems += 6;

    // Esconde o botão se todas as imagens já estiverem visíveis
    if (visibleItems >= totalItems) {
        seeMoreBtn.style.display = 'none';
    }
}

// Inicializa a galeria com as primeiras 6 imagens visíveis
function initializeGallery() {
    galleryItems.forEach((item, index) => {
        if (index < visibleItems) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// Adiciona eventos
seeMoreBtn.addEventListener('click', showMoreItems);
initializeGallery();

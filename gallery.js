const galleryData = [
    { type: 'image', src: 'images/1.jpeg', alt: 'Imagem 1' },
    { type: 'image', src: 'images/2.jpg', alt: 'Imagem 2' },
    { type: 'image', src: 'images/3.png', alt: 'Imagem 3' },
    { type: 'image', src: 'images/7.jpg', alt: 'Imagem 4' },
    { type: 'image', src: 'images/8.jpg', alt: 'Imagem 5' },
    { type: 'image', src: 'images/9.jpg', alt: 'Imagem 6' },
    { type: 'image', src: 'images/10.jpg', alt: 'Imagem 7' },
    { type: 'video', src: 'images/video.mp4' },
    { type: 'image', src: 'images/11.jpg', alt: 'Imagem 9' },
    { type: 'image', src: 'images/12.jpg', alt: 'Imagem 10' },
    { type: 'image', src: 'images/13.jpg', alt: 'Imagem 11' },
    { type: 'image', src: 'images/14.jpg', alt: 'Imagem 12' },
    { type: 'image', src: 'images/15.jpg', alt: 'Imagem 13' },
    { type: 'image', src: 'images/16.jpg', alt: 'Imagem 14' },
    { type: 'image', src: 'images/17.jpg', alt: 'Imagem 15' },
    { type: 'image', src: 'images/18.jpg', alt: 'Imagem 16' },
    { type: 'image', src: 'images/19.jpg', alt: 'Imagem 17' },
    { type: 'image', src: 'images/20.jpg', alt: 'Imagem 18' },
];

const galleryContainer = document.getElementById('galleryContainer');
const seeMoreBtn = document.getElementById('seeMoreBtn');
let visibleItems = 0; // Número de itens inicialmente visíveis

// Função para criar e renderizar um item de galeria
function createGalleryItem(item) {
    const col = document.createElement('div');
    col.className = 'col-6 col-md-4'; // Responsivo: 2 colunas em telas pequenas, 3 em médias

    const wrapper = document.createElement('div');
    wrapper.className = 'ratio ratio-1x1'; // Proporção fixa de 1:1 (quadrado)

    if (item.type === 'image') {
        const img = document.createElement('img');
        img.src = item.src;
        img.alt = item.alt || 'Imagem da galeria';
        img.className = 'img-fluid gallery-image';
        wrapper.appendChild(img);
    } else if (item.type === 'video') {
        const video = document.createElement('video');
        video.className = 'gallery-image w-100 h-100';
        video.autoplay = true;
        video.loop = true;
        video.muted = true;
        video.playsInline = true;

        const source = document.createElement('source');
        source.src = item.src;
        source.type = 'video/mp4';

        video.appendChild(source);
        wrapper.appendChild(video);
    }

    col.appendChild(wrapper);
    return col;
}

// Função para carregar mais itens na galeria
function loadMoreItems() {
    const totalItems = galleryData.length;
    const endIndex = Math.min(visibleItems + 6, totalItems); // Garante que não exceda o total de imagens

    // Carrega os próximos 6 itens
    for (let i = visibleItems; i < endIndex; i++) {
        const galleryItem = createGalleryItem(galleryData[i]);
        galleryContainer.appendChild(galleryItem);
    }

    // Atualiza o número de itens visíveis
    visibleItems += 6;

    // Esconde o botão se todos os itens foram carregados
    if (visibleItems >= totalItems) {
        seeMoreBtn.style.display = 'none';
    }
}

// Inicializa a galeria com os primeiros 6 itens
function initializeGallery() {
    loadMoreItems(); // Carrega as primeiras 6 imagens
}

// Adiciona eventos
seeMoreBtn.addEventListener('click', loadMoreItems);
initializeGallery();

// Modal para exibir imagens ou vídeos ampliados
const galleryModal = new bootstrap.Modal(document.getElementById('galleryModal'));
const modalImage = document.getElementById('modalImage');

galleryContainer.addEventListener('click', (event) => {
    const target = event.target;
    if (target.tagName === 'IMG' || target.tagName === 'VIDEO') {
        modalImage.src = target.src;
        galleryModal.show();
    }
});

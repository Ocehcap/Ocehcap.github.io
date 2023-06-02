function resizeAndCompressImage(imageFile, maxWidth, maxHeight, quality) {
  return new Promise((resolve, reject) => {
    const img = new Image();

    img.onload = function() {
      const canvas = document.createElement('canvas');
      let width = img.width;
      let height = img.height;

      if (width > height) {
        if (width > maxWidth) {
          height *= maxWidth / width;
          width = maxWidth;
        }
      } else {
        if (height > maxHeight) {
          width *= maxHeight / height;
          height = maxHeight;
        }
      }

      canvas.width = width;
      canvas.height = height;

      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, width, height);

      canvas.toBlob(
        blob => {
          resolve(blob);
        },
        'image/jpeg',
        quality
      );
    };

    img.onerror = function() {
      reject(new Error('Failed to load image'));
    };

    img.src = URL.createObjectURL(imageFile);
  });
}

const app = new Vue({
  el: '#listaSneakers',
  data: {
    sneakers: [], // Array to store sneakers
    selectedSneaker1: null, // Selected sneaker for the first set
    selectedSneaker2: null, // Selected sneaker for the second set
  },
  methods: {
    async addSneaker(name, photoUrl) {
      // Check if a sneaker with the same name already exists in the list
      const existingSneaker = this.sneakers.find(sneaker => sneaker.name === name);
      if (existingSneaker) {
        console.log('Sneaker already exists in the list.');
        return;
      }

      // Load the image using XMLHttpRequest
      const xhr = new XMLHttpRequest();
      xhr.onload = async () => {
        const resizedImageBlob = await resizeAndCompressImage(xhr.response, 200, 200, 0.8); // Resize and compress the image

        const reader = new FileReader();
        reader.onloadend = () => {
          const photoBase64 = reader.result.split(',')[1]; // Extract the base64 data
          const newSneaker = {
            name: name,
            photo: photoBase64
          };
          this.sneakers.push(newSneaker);
          localStorage.setItem('sneakers', JSON.stringify(this.sneakers));
        };
        reader.readAsDataURL(resizedImageBlob);
      };
      xhr.open('GET', photoUrl);
      xhr.responseType = 'blob';
      xhr.send();
    }
  },
  mounted() {
    // Retrieve the existing sneakers from localStorage or initialize an empty array
    const storedSneakers = localStorage.getItem('sneakers');
    this.sneakers = storedSneakers ? JSON.parse(storedSneakers) : [];

    // Example sneakers
    const initialSneakers = [
      {
        name: 'Nike Dunk Low Medium Curry',
        photo: './images/nike-dunk-low-medium-curry-dropout-1_700x700.png'
      },
      // Add more example sneakers here if needed
    ];

    // Add the example sneakers to the list
    initialSneakers.forEach(sneaker => {
      this.addSneaker(sneaker.name, sneaker.photo);
    });
  }
});



  
  
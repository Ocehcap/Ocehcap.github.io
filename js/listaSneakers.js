// Vue instance to handle the sneaker list
const app = new Vue({
    el: '#listaSneakers',
    data: {
      sneakers: [] // Array to store sneakers
    },
    methods: {
      addSneaker(name, photo) {
        // Check if a sneaker with the same name already exists in the list
        const existingSneaker = this.sneakers.find(sneaker => sneaker.name === name);
        if (existingSneaker) {
          console.log('Sneaker already exists in the list.');
          return;
        }
  
        const newSneaker = {
          name: name,
          photo: photo
        };
        this.sneakers.push(newSneaker);
        // Update the sneakers in localStorage
        localStorage.setItem('sneakers', JSON.stringify(this.sneakers));
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
          photo: 'path/to/photo1.jpg'
        },
        {
          name: 'Nike Dunk Low University Blue',
          photo: 'path/to/photo2.jpg'
        },
        {
          name: 'Nike Dunk Low Spartan Green',
          photo: 'path/to/photo3.jpg'
        }
      ];
  
      // Add the example sneakers to the list
      initialSneakers.forEach(sneaker => {
        this.addSneaker(sneaker.name, sneaker.photo);
      });
    }
  });
  
  
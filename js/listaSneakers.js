const app = new Vue({
  el: '#listaSneakers',
  data: {
      sneakers: [], // Array to store sneakers
      newSneakerName: '', // Property to store the new sneaker name
      searchTerm: '' // Property to store the search term
  },
  computed: {
      filteredSneakers() {
          const term = this.searchTerm.trim().toLowerCase();
          if (term === '') {
              return this.sneakers;
          } else {
              return this.sneakers.filter(sneaker => sneaker.name.toLowerCase().includes(term));
          }
      }
  },
  methods: {
    addSneaker() {
      const name = this.searchTerm.trim();
      if (name === '') {
          console.log('Please enter a sneaker name.');
          return;
      }
  
      // Check if a sneaker with the same name already exists in the list
      const existingSneaker = this.sneakers.find(sneaker => sneaker.name === name);
      if (existingSneaker) {
          console.log('Sneaker already exists in the list.');
          return;
      }
  
      const newSneaker = {
          name: name
      };
      this.sneakers.push(newSneaker);
      // Update the sneakers in localStorage
      localStorage.setItem('sneakers', JSON.stringify(this.sneakers));
  
      // Clear the input field
      this.searchTerm = '';
  },
      removeSneaker(index) {
          this.sneakers.splice(index, 1);
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
          },
          {
              name: 'Nike Dunk Low University Blue',
          },
          {
              name: 'Nike Dunk Low Spartan Green',
          }
      ];

      // Add the example sneakers to the list
      initialSneakers.forEach(sneaker => {
          this.addSneaker(sneaker.name);
      });
  }
});
  
  
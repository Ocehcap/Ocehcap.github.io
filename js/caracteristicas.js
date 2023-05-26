new Vue({
  el: '#exampleModal',
  data: {
    selectedSneaker: ''
  },
  methods: {
    openModal(sneakerId) {
      const sneakerSelect = document.getElementById(sneakerId);
      this.selectedSneaker = sneakerSelect.options[sneakerSelect.selectedIndex].text;
    }
  },
  mounted() {
    const self = this;

    // Update the event listener for adicionarPOP1Button
    const adicionarPOP1Button = document.getElementById('adicionarPOP1');
    adicionarPOP1Button.addEventListener('click', function() {
      self.openModal('sneaker1');
    });

    // Update the event listener for adicionarPOP2Button
    const adicionarPOP2Button = document.getElementById('adicionarPOP2');
    adicionarPOP2Button.addEventListener('click', function() {
      self.openModal('sneaker2');
    });

    // Update the event listener for the modal close button
    const closeButton = document.querySelector('#exampleModal .btn-secondary');
    closeButton.addEventListener('click', function() {
      self.selectedSneaker = '';
    });

    // Update the event listener for the modal Submit button
    const submitButton = document.querySelector('#exampleModal .btn-features');
    submitButton.addEventListener('click', function() {
      // Add your logic to handle the form submission here
      console.log('Form submitted');
    });
  }
});


  
  
  
  
  
  
  
  

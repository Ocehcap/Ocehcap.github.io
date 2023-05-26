new Vue({
  el: '#exampleModal',
  data: {
    selectedSneaker: ''
  },
  methods: {
    openModal(sneakerId) {
      const sneakerSelect = document.getElementById(sneakerId);
      this.selectedSneaker = sneakerSelect.options[sneakerSelect.selectedIndex].text;
    },
    clearModal() {
      this.selectedSneaker = '';
    }
  },
  mounted() {
    const self = this;

    const adicionarPOP1Button = document.getElementById('adicionarPOP1');
    adicionarPOP1Button.addEventListener('click', function() {
      self.openModal('sneaker1');
    });

    const adicionarPOP2Button = document.getElementById('adicionarPOP2');
    adicionarPOP2Button.addEventListener('click', function() {
      self.openModal('sneaker2');
    });

    const closeButton = document.querySelector('#exampleModal .btn-close');
    closeButton.addEventListener('click', function() {
      self.clearModal();
    });

    const submitButton = document.querySelector('#exampleModal .btn-features');
    submitButton.addEventListener('click', function() {
      console.log('Form submitted');
    });
  }
});



  
  
  
  
  
  
  
  

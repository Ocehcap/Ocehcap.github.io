const app = new Vue({
  el: '#exampleModal',
  data: {
    selectedSneaker: ''
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
  },
  methods: {
    openModal(sneakerId) {
      const sneakerSelect = document.getElementById(sneakerId);
      this.selectedSneaker = sneakerSelect.value;
    }
  }
});


  
  
  
  
  
  
  
  

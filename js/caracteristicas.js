new Vue({
  el: '#exampleModal',
  data: {
    selectedSneaker: ''
  },
  methods: {
    openModal(sneakerId) {
      const sneakerSelect = document.getElementById(sneakerId);
      this.selectedSneaker = sneakerSelect.value;
    }
  }
});

  
  
  
  
  
  
  
  

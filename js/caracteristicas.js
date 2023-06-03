new Vue({
  el: '#exampleModal1',
  data: {
    selectedSneaker: '',
    selectedState: '',
    selectedSize: '',
    selectedHasBox: '',
    selectedPhotos: ''
  },
  methods: {
    openModal1() {
      const sneakerSelect = document.getElementById('sneaker1');
      this.selectedSneaker = sneakerSelect.options[sneakerSelect.selectedIndex].text;
    },
    submitModal1() {
      // obter os valores selecionados
      const stateSelect = document.getElementById('stateDoTrade1');
      this.selectedState = stateSelect.options[stateSelect.selectedIndex].text;

      const sizeSelect = document.getElementById('sizeDoTrade1');
      this.selectedSize = sizeSelect.options[sizeSelect.selectedIndex].text;

      const hasBoxYes = document.getElementById('boxDoTradeYes1');
      const hasBoxNo = document.getElementById('boxDoTradeNo1');
      this.selectedHasBox = hasBoxYes.checked ? 'Yes' : hasBoxNo.checked ? 'No' : '';

      const photoInput = document.getElementById('fotoDoTrade1');
      this.selectedPhotos = photoInput.value;

      // exibir os dados na div selected-info2
      const selectedInfoDiv = document.getElementById('selected-info1');
      selectedInfoDiv.innerHTML = `
        <h3>Selected Sneaker: ${this.selectedSneaker}</h3>
        <p>State of the Shoe: ${this.selectedState}</p>
        <p>Size of the Shoe: ${this.selectedSize}</p>
        <p>Has Box: ${this.selectedHasBox}</p>
        <p>Selected Photos: ${this.selectedPhotos}</p>
      `;

      // fechar a modal
      const modal = document.getElementById('exampleModal1');
      const bootstrapModal = bootstrap.Modal.getInstance(modal);
      bootstrapModal.hide();
    }
  },
  mounted() {
    const self = this;
    const adicionarPOP1Button = document.getElementById('adicionarPOP1');
    adicionarPOP1Button.addEventListener('click', function() {
      self.openModal1();
    });

    const submitButton = document.querySelector('#exampleModal1 .btn-features');
    submitButton.addEventListener('click', function() {
      self.submitModal1();
    });
  }
});


new Vue({
  el: '#exampleModal2',
  data: {
    selectedSneaker: '',
    selectedState: '',
    selectedSize: '',
    selectedHasBox: '',
    selectedPhotos: ''
  },
  methods: {
    openModal2() {
      const sneakerSelect = document.getElementById('sneaker2');
      this.selectedSneaker = sneakerSelect.options[sneakerSelect.selectedIndex].text;
    },
    submitModal2() {
      // obter os valores selecionados
      const stateSelect = document.getElementById('stateDoTrade2');
      this.selectedState = stateSelect.options[stateSelect.selectedIndex].text;

      const sizeSelect = document.getElementById('sizeDoTrade2');
      this.selectedSize = sizeSelect.options[sizeSelect.selectedIndex].text;

      const hasBoxYes = document.getElementById('boxDoTradeYes2');
      const hasBoxNo = document.getElementById('boxDoTradeNo2');
      this.selectedHasBox = hasBoxYes.checked ? 'Yes' : hasBoxNo.checked ? 'No' : '';

      const photoInput = document.getElementById('fotoDoTrade2');
      this.selectedPhotos = photoInput.value;

      // exibir os dados na div selected-info2
      const selectedInfoDiv = document.getElementById('selected-info2');
      selectedInfoDiv.innerHTML = `
        <h3>Selected Sneaker: ${this.selectedSneaker}</h3>
        <p>State of the Shoe: ${this.selectedState}</p>
        <p>Size of the Shoe: ${this.selectedSize}</p>
        <p>Has Box: ${this.selectedHasBox}</p>
        <p>Selected Photos: ${this.selectedPhotos}</p>
      `;

      // fechar a modal
      const modal = document.getElementById('exampleModal2');
      const bootstrapModal = bootstrap.Modal.getInstance(modal);
      bootstrapModal.hide();
    }
  },
  mounted() {
    const self = this;
    const adicionarPOP2Button = document.getElementById('adicionarPOP2');
    adicionarPOP2Button.addEventListener('click', function() {
      self.openModal2();
    });

    const submitButton = document.querySelector('#exampleModal2 .btn-features');
    submitButton.addEventListener('click', function() {
      self.submitModal2();
    });
  }
});

new Vue({
  el: '#adicionarTroca',
  data: {
    tradeList: JSON.parse(localStorage.getItem('tradeList')) || [], // Lista de trocas
    nextTradeId: 1 // Próximo ID da troca
  },
  methods: {
    createTrade() {
      const selectedInfo1 = document.getElementById('selected-info1').innerHTML;
      const selectedInfo2 = document.getElementById('selected-info2').innerHTML;
      const storedUser = localStorage.getItem('currentUser');
      const userON = JSON.parse(storedUser);
      const trade = {
        id: this.nextTradeId, // ID da troca
        accept: false,
        userHas: {
          user: {
            id: userON.id,
            name: userON.name,
            firstName: userON.firstName,
            lastName: userON.lastName,
            email: userON.email,
            emailVerified: userON.emailVerified,
            picture: userON.picture
          },
          SelectedSneaker: this.parseSelectedInfo(selectedInfo1).selectedSneaker,
          StateoftheShoe: this.parseSelectedInfo(selectedInfo1).selectedState,
          SizeoftheShoe: this.parseSelectedInfo(selectedInfo1).selectedSize,
          HasBox: this.parseSelectedInfo(selectedInfo1).selectedHasBox,
          SelectedPhotos: this.parseSelectedInfo(selectedInfo1).selectedPhotos,
        },
        userWants: {
          user: null,
          SelectedSneaker: this.parseSelectedInfo(selectedInfo2).selectedSneaker,
          StateoftheShoe: this.parseSelectedInfo(selectedInfo2).selectedState,
          SizeoftheShoe: this.parseSelectedInfo(selectedInfo2).selectedSize,
          HasBox: this.parseSelectedInfo(selectedInfo2).selectedHasBox,
          SelectedPhotos: this.parseSelectedInfo(selectedInfo2).selectedPhotos,
        },
      };

      this.tradeList.push(trade);
      localStorage.setItem('tradeList', JSON.stringify(this.tradeList));

      this.nextTradeId++; // Incrementar o próximo ID da troca
      localStorage.setItem('nextTradeId', this.nextTradeId.toString()); // Salvar o próximo ID no armazenamento local
    },
    parseSelectedInfo(selectedInfo) {
      const parsedInfo = selectedInfo
        .replace(/\n/g, '') // Remover quebras de linha
        .replace(/<\/?[^>]+(>|$)/g, '') // Remover tags HTML
        .trim(); // Remover espaços em branco no início e no fim

      const infoArray = parsedInfo.split(/\s{2,}/).filter(info => info !== ''); // Separar as informações em tópicos

      const tradeInfo = {
        selectedSneaker: infoArray[0].split(':')[1].trim(),
        selectedState: infoArray[1].split(':')[1].trim(),
        selectedSize: infoArray[2].split(':')[1].trim(),
        selectedHasBox: infoArray[3].split(':')[1].trim(),
        selectedPhotos: infoArray[4].split(':')[1].trim(),
      };

      return tradeInfo;
    },
    createTradeAndJump() {
      this.createTrade();
      window.open('faq.html', '_self');
    },
  },
  mounted() {
    const storedNextTradeId = localStorage.getItem('nextTradeId');
    if (storedNextTradeId) {
      this.nextTradeId = parseInt(storedNextTradeId);
    }
  },
});


  
  
  
  
  

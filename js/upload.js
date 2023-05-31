function uploadImage() {
    const fileInput = document.getElementById('imageUpload');
    const imageContainer = document.getElementById('imageContainer');
  
    const file = fileInput.files[0];
    const reader = new FileReader();
  
    reader.onload = function(e) {
      const imageData = e.target.result;
      imageContainer.innerHTML = `<img src="${imageData}" alt="Uploaded Image">`;
    };
  
    reader.readAsDataURL(file);
  };
  
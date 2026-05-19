const dragArea = document.querySelector('.appBody');
const dragText = dragArea.querySelector('h3');
const button = dragArea.querySelector('button');
const input = dragArea.querySelector('input');

let myFile;

button.onclick = () => input.click();

input.addEventListener('change', function () {
  myFile = this.files[0]; // new topic to me
  dragArea.classList.add('active');
  showMe();
});

dragArea.addEventListener('dragover', function (event) {
  event.preventDefault();
  dragArea.classList.add('active');
  dragText.textContent = 'Release to upload';
});

dragArea.addEventListener('dragleave', function () {
  dragArea.classList.remove('active');
  dragText.textContent = 'Drag & Drop';
});

dragArea.addEventListener('drop', event => {
  event.preventDefault();
  myFile = event.dataTransfer.files[0]; // new topic to me
  showMe();
});

function showMe() {
  let fileType = myFile.type;
  let validEx = ['image/jpeg', 'image/png', 'image/jpg', 'image/webp'];

  if (validEx.includes(fileType)) {
    let fileReader = new FileReader();

    // new topic to me
    fileReader.onload = () => {
      let imageURL = fileReader.result;
      let image = `<img src="${imageURL}" alt="">`;
      dragArea.innerHTML = image;
    };

    // new topic to me
    fileReader.readAsDataURL(myFile);
  } else {
    alert('This file is not valid');
    dragArea.classList.remove('active');
    dragText.textContent = 'Drag & Drop';
  }
}


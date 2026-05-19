const dragArea = document.querySelector('.appBody');
const dragText = dragArea.querySelector('h3');
const button = dragArea.querySelector('button');
const input = dragArea.querySelector('input');

let myFile;

button.onclick = () => input.click();

input.addEventListener('change', function () {
  myFile = this.files[0];
  dragArea.classList.add('active');
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
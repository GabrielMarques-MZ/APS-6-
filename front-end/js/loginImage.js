
let images = fetch("/json/images.json")
.then(response => response.json())
.then(json => console.log(json));

console.log(images)

const usuarios = ['usuario1', 'usuario2', 'usuario3']

const fileSelector = document.getElementById('input-file');
fileSelector.addEventListener('change', (event) => {
const file = event.target.files[0];
const reader = new FileReader();
reader.onloadend = () => {
  console.log(images)
  const index = images.allImages.findIndex((img) => (img === reader.result))
  const usuario = usuarios[index]
  if (!usuario) {
    alert('usuario não cadastrado')
  }
  console.log(`usuario`, usuario)
}
reader.readAsDataURL(file);
});
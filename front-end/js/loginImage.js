
let images = fetch("json/images.json")
  .then(response => response.json())
  .then(json => images = json);

const usuarios = ['user1', 'user2', 'user3']

let buscaCampo1 = document.querySelector(".campo_login");
let buscaFoto1 = document.querySelector(".foto_login");
let buscaCampoNegado = document.getElementById("nega_login");
let buscaBotao = document.querySelector(".btn_login")
let buscaLabel = document.getElementById("lbl_btn")
console.log(buscaLabel)

const fileSelector = document.getElementById('input-file');
fileSelector.addEventListener('change', (event) => {
const file = event.target.files[0];
const reader = new FileReader();
reader.onloadend = () => {
  console.log(images)
  const index = images.allImages.findIndex((img) => (img === reader.result))
  const usuario = usuarios[index]
  if (!usuario) {
    alert("Usuário ou senha incorretos");
    buscaCampo1.style.borderColor = "#de3535";
    buscaFoto1.style.borderColor = "#de3535";
    buscaCampoNegado.style.display = "block"
    buscaCampoNegado.classList.add("pisca");
    buscaCampoNegado.style.color = "#de3535";
    buscaBotao.style.borderColor = "#de3535";
    buscaLabel.style.color = "#de3535";
  }else if(usuario === 'user1'){
    location.href = "/front-end/user1.html"
    sessionStorage.setItem("auth", 'user1');
  }else if (usuario === 'user2'){
    location.href = "/front-end/user2.html"
    sessionStorage.setItem("auth", 'user2');
  }else if (usuario === 'user3'){
    location.href = "/front-end/user3.html"
    sessionStorage.setItem("auth", 'user3');
  }
}
reader.readAsDataURL(file);
});
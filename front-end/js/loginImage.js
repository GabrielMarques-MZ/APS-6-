
let images = fetch("json/images.json")
  .then(response => response.json())
  .then(json => images = json);

const usuarios = ['user1', 'user2', 'user3']

let botaoLogin = document.querySelector(".btn_login")
let textLogin1 = document.getElementById("texto_login1")
let autenticaLogin1 = document.getElementById("autentica_login")
let pegaCampo1 = document.getElementById("campo_login1");
let pegaFoto1 = document.getElementById("foto_login1");
let pegaBtn = document.getElementById("btn_login");
let pegaBtnText = document.querySelector(".btn_login p");

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
    textLogin1.style.display = "block";
    textLogin1.classList.add("pisca");
    pegaCampo1.style.borderColor = "#de3535";
    pegaFoto1.style.borderColor = "#de3535";
    pegaBtn.style.borderColor = "#de3535";
    pegaBtnText.style.color = "#FFF";
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
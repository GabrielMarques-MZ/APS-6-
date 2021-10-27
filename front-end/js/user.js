const usuarios = {
  usuario1:{
    nome: "user1",
    senha: "unip"
    },
  usuario2:{
    nome: "user2",
    senha: "unip"
  },
  usuario3:{
    nome: "user3",
    senha: "unip"
  }
};


let campoUsuario = document.getElementById("login")
let campoSenha = document.getElementById("senha")
let botaoLogin = document.querySelector(".btn_login")
let textLogin = document.getElementById("texto_login")
let pegaCampo = document.getElementById("campo_login");
let pegaFoto = document.getElementById("foto_login");
let pegaBtn = document.getElementById("btn_login");
let pegaBtnText = document.querySelector(".btn_login p");
console.log(pegaBtnText);




function realizaLogin(){

  const campoUser = campoUsuario.value;
  const campoPassword = campoSenha.value;

  const valueUser1 = usuarios.usuario1.nome
  const valueUser2 = usuarios.usuario2.nome
  const valueUser3 = usuarios.usuario3.nome
  const valuePassword1 = usuarios.usuario1.senha
  const valuePassword2 = usuarios.usuario2.senha
  const valuePassword3 = usuarios.usuario3.senha



  if(campoUser === ""){
    alert("Insira seu usuário")
    window.location.reload()
  }else if(campoPassword === ""){
    alert("Insira sua senha")
    window.location.reload()
  }else if(campoUser.toLowerCase() === valueUser1 && campoPassword.toLowerCase() === valuePassword1){
      location.href = "/front-end/user1.html"
    }else if (campoUser.toLowerCase() === valueUser2 && campoPassword.toLowerCase() === valuePassword2){
      location.href = "/front-end/user2.html"
    }else if (campoUser.toLowerCase() === valueUser3 && campoPassword.toLowerCase() === valuePassword3){
      location.href = "/front-end/user3.html"
    }else if(campoUser !== "" && campoPassword !== ""){
      alert("Usuário ou senha incorretos");
      textLogin.style.display = "block";
      textLogin.classList.add("pisca");
      pegaCampo.style.borderColor = "red";
      pegaFoto.style.borderColor = "red";
      pegaBtn.style.borderColor = "red";
      pegaBtnText.style.color = "#FFF";
      campoUsuario.style.borderColor = "red";
      campoSenha.style.borderColor = "red";

    }
  }


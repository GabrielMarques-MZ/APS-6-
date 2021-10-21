const locaisObject = {
  "São Paulo": {
      "São Paulo": ["Adubo", "Sementes", "Agua", "Minhocas"],
      "Campinas": ["Adubo", "Sementes", "Agua", "Minhocas"],
      "Boituva": ["Adubo", "Sementes", "Agua", "Minhocas"]
  },
  "Rio de Janeiro": {
      "Rio de Janeiro": ["Adubo", "Sementes", "Agua"],
      "São Gonçalo": ["Adubo", "Sementes", "Agua"]
  }
}

let locaisSel = document.getElementById("locais");
let enderecoSel = document.getElementById("endereco");
let produtosSel = document.getElementById("produtos");
let insumosSel = document.getElementById("insumos");
let tratoresSel = document.getElementById("tratores");

// Carremento dos selects
window.onload = function() {

  
  for (let x in locaisObject) {
    locaisSel.options[locaisSel.options.length] = new Option(x, x);
  }
  locaisSel.onchange = function() {
    //empty produtoss- and enderecos- dropdowns
    enderecoSel.length = 1;
    //display correct values
    for (let y in locaisObject[this.value]) {
      enderecoSel.options[enderecoSel.options.length] = new Option(y, y);
    }
  }
}

// Recebimento dos dados do formulario
let botao = document.getElementById('botao');
let tabela = document.getElementById('tabela');
let idBotao = document.getElementById("botao")
console.log(idBotao)

// Verifica se existem campos vazios
botao.addEventListener('click', (e) => {
  if (locaisSel.value === '1') {
    alert('Insira um valor no campo Localização');
  } else if (enderecoSel.value === '2'){
      alert('Insira um valor no campo Endereço');
  } else if (produtosSel.value === '3'){
    alert('Insira um valor no campo Produtos');
  } else if (insumosSel.value === '4'){
    alert('Insira um valor no campo Insumos');
  } else if (tratoresSel.value === '5'){
    alert('Insira um valor no campo Tratores');

    
  } else{
    idBotao.addEventListener("click", abreModal);

    function abreModal(){
      $("#modal-mensagem").modal('toggle');
    }

    e.preventDefault();

    let locais = locaisSel.value;
    let endereco = enderecoSel.value;
    let produtos = produtosSel.value;
    let insumos = insumosSel.value;
    let tratores = tratoresSel.value;

    let td = document.createElement("td");
    tabela.innerHTML =  `<td>${locais}</td><td>${endereco}</td><td>${produtos}</td><td>${insumos}</td><td>${tratores}</td>` ;
    tabela.append(td);
  }
});

function resetaCampos(){
  locaisSel.value = "1";
  enderecoSel.value = "2";
  produtosSel.value = "3";
  insumosSel.value = "4";
  tratoresSel.value = "5";
}


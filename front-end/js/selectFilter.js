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

var locaisSel = document.getElementById("locais");
var enderecoSel = document.getElementById("endereco");
var produtosSel = document.getElementById("produtos");
var insumosSel = document.getElementById("insumos");
var tratoresSel = document.getElementById("tratores");

// Carremento dos selects
window.onload = function() {

  
  for (var x in locaisObject) {
    locaisSel.options[locaisSel.options.length] = new Option(x, x);
  }
  locaisSel.onchange = function() {
    //empty produtoss- and enderecos- dropdowns
    enderecoSel.length = 1;
    //display correct values
    for (var y in locaisObject[this.value]) {
      enderecoSel.options[enderecoSel.options.length] = new Option(y, y);
    }
  }
}

// Recebimento dos dados do formulario
var botao = document.getElementById('botao');
var tabela = document.getElementById('tabela');

botao.addEventListener('click', (e) => {
  if (produtosSel.value !== '3') {
    e.preventDefault();
    console.log('Envie o form');

    var locais = locaisSel.value;
    var endereco = enderecoSel.value;
    var produtos = produtosSel.value;
    var insumos = insumosSel.value;
    var tratores = tratoresSel.value;
    console.log(locais, endereco, produtos);

    let td = document.createElement("td");
    tabela.innerHTML =  `<td>${locais}</td><td>${endereco}</td><td>${produtos}</td><td>${insumos}</td><td>${tratores}</td>` ;
    tabela.append(td);
  } else {
    tabela.innerHTML =  none ;
    alert('Preencha todos os campos');
  }
});



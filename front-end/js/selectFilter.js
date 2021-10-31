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


function abreModal(){
  console.log('abrindo modal')
  $("#modal-mensagem").modal('toggle');
}

// // Carremento dos selects
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


// // Recebimento dos dados do formulario
let botao = document.getElementById('botao');
let tabela = document.getElementById('tabela');
let idBotao = document.getElementById("botao")


function resetaCampos(){
  window.location.reload()
}


const form = document.forms.form1

form.addEventListener('submit', event => {
  event.preventDefault()
  const { locais, endereco, produtos, insumos, tratores } = form

  if (locais.value === "1"
      || endereco.value === "2"
      || produtos.value === "3"
      || insumos.value === "4"
      || tratores.value === "5"
  ) {
    return alert('Prencha todos os campos')
  }

  console.log('locais', locais.value)
  console.log('endereco', endereco.value)
  console.log('produtos', produtos.value)
  console.log('insumos', insumos.value)
  console.log('tratores', tratores.value)

  const checkBoxValuesImposto = Array.from(document.querySelectorAll('input.imposto[type=checkbox]:checked'))
    .map(item => ({
      name: item.name,
      value: +item.value
    })
  )

  console.log('array com valores do checkbox', checkBoxValuesImposto);

  const checkBoxValuesAgro = Array.from(document.querySelectorAll('input.agro[type=checkbox]:checked'))
    .map(item => ({
      name: item.name,
      value: +item.value
    })
  )
  console.log('array com valores do checkbox', checkBoxValuesAgro);

  const impostos = checkBoxValuesImposto.find(({ name }) => name === 'itr' ||  'irpf' || 'iss');
  const agrotoxicos = checkBoxValuesAgro.find(({ name }) => name === 'herbicidas' ||  'inseticidas' || 'fungicidas');

  const imposto = impostos.name;
  console.log('impostos: ', imposto);
  
  const agrotoxico = agrotoxicos.name;
  console.log('agrotoxico', agrotoxico);

  let td = document.createElement("td");
  tabela.innerHTML =  `
    <td>${locais.value}</td>
    <td>${endereco.value}</td>
    <td>${produtos.value}</td>
    <td>${insumos.value}</td>
    <td>${tratores.value}</td>
    <td>${imposto}</td>
    <td>${agrotoxico}</td>
  `;
  tabela.append(td);
  abreModal()
})

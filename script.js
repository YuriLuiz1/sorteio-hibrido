const diasSemana = ["Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira"];

const pessoas = [];

function adicionaPessoas() {
  const pegaNome = document.getElementById("insere-nomes");

  if (pegaNome.value.trim() !== "") {
    pessoas.push(pegaNome.value);
  }

  const listaAdicionados = document.getElementById("lista-adicionados")
  listaAdicionados.innerHTML = ''


  for (let i = 0; i < pessoas.length; i++) {
    const mostraAdicionados = document.createElement("li")
    mostraAdicionados.textContent = `Adicionado: ${pessoas[i]}`
    listaAdicionados.appendChild(mostraAdicionados)
  }

  document.getElementById('insere-nomes').addEventListener("keypress", (event) => {
    if (event.key == 'Enter') {
      adicionaPessoas();
    }
  });

  pegaNome.value = "";
}

function pessoasAleatorias() {
  for (let index = pessoas.length - 1; index > 0; index--) {
    const embaralhamento = Math.floor(Math.random() * (index + 1));
    [pessoas[index], pessoas[embaralhamento]] = [pessoas[embaralhamento], pessoas[index]];
  }
  return pessoas
}

function mostraResultado() {
  const limpaAdicionados = document.getElementById("lista-adicionados")
  const pegaLista = document.getElementById("lista")

  limpaAdicionados.innerHTML = ''
  pegaLista.innerHTML = ''

  const pessoasPorDia = {};

  const embaralhadas = pessoasAleatorias();
  embaralhadas.map((nome, index) => {
    const dia = diasSemana[index % diasSemana.length];

    if (!pessoasPorDia[dia]) {
      pessoasPorDia[dia] = [];
    }
    pessoasPorDia[dia].push(nome);


    return nome
  });

  diasSemana.forEach(dia => {
    if (pessoasPorDia[dia]) {
      const item = document.createElement("li");
      const nomes = pessoasPorDia[dia].join(' e ');
      item.textContent = `${dia}: ${nomes}`;
      pegaLista.appendChild(item)
    }
  })
}



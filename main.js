const pessoas =[]
const carros = []
const livros = []
const alunos = []

function adicionarPessoa(nome, idade,profissao, hobby){
  pessoas.push({nome, idade, profissao, hobby})
}

function adicionarCarro(marca, modelo, ano, potencia, tipo){
  carros.push({marca, modelo, ano, potencia, tipo})
}

function adicionarLivro(titulo, autor, ano){
  livros.push({titulo, autor, ano})
}

function adicionarAluno(nome, portugues, matematica, historia,){
  alunos.push({nome, portugues, matematica, historia})
}

function calcularMedia(aluno){
  const media = (aluno.portugues + aluno.matematica + aluno.historia) / 3
  return media;
}

const calculadora = {
  soma: function(a, b){
    return a + b
  },
  subtracao: function(a, b){
    return a - b
  }
}

adicionarPessoa("João", 30, "Engenheiro", "Futebol")
adicionarCarro("Toyota", "Corolla", 2020, 150, "Sedan")
adicionarLivro("O Senhor dos Anéis", "J.R.R. Tolkien", 1954)
adicionarAluno("Maria", 8, 9, 7)

console.log(pessoas)
console.log(carros)
console.log(livros)
console.log(alunos)
console.log(calcularMedia(alunos[0]))
console.log(calculadora.soma(5, 3))
console.log(calculadora.subtracao(5, 3))
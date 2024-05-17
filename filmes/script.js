class Filme {
  constructor(titulo, autor, anoLancamento) {
    this.titulo = titulo;
    this.autor = autor;
    this.anoLancamento = anoLancamento;
  }
  getTitulo() {
    return this.titulo;
  }
  getAutor() {
    return this.autor;
  }
  getAnoLancamento() {
    return this.anoLancamento;
  }
  setAnolancamento(novoAnoLancamento) {
    this.anoLancamento = novoAnoLancamento;
  }
  setTitulo(novoTitulo) {
    this.titulo = novoTitulo;
  }
  setAutor(novoAutor) {
    this.autor = novoAutor;
  }
  mostrarDetalhes() {
    return `Novo Filme: ${this.titulo}, Diretor: ${this.autor}, Lançamento: ${this.anoLancamento}`;
  }
}
function adicionarFilmeNaLista(filme) {
  let liFilme = document.createElement("li");
  listaFilmes.appendChild(liFilme);
  liFilme.innerHTML = `<strong>${filme.mostrarDetalhes()}</strong>`;
}
function cadastrarFilme(event) {
  event.preventDefault(); // Impede o envio do formulário e mudança de página
  const titulo = document.getElementById("titulo").value;
  const autor = document.getElementById("autor").value;
  const anoLancamento = document.getElementById("anoLancamento").value;
  const filme = new Filme(titulo, autor, anoLancamento); // Cria um novo filme
  adicionarFilmeNaLista(filme); // Adiciona o filme à lista
  document.getElementById("titulo").value = "";
  document.getElementById("autor").value = "";
  document.getElementById("anoLancamento").value = "";
}
const formFilme = document.getElementById("formFilme");

let listaFilmes = document.getElementById("Filmes");

let filme1 = new Filme("Velozes e Furiosos", "Rob Cohen", "2001");
let liFilme1 = document.createElement("li");
listaFilmes.appendChild(liFilme1);
liFilme1.innerHTML = `<strong>${filme1.mostrarDetalhes()}</strong>`;

let filme2 = new Filme("Piratas do Caribe", "Gore Verbinski", "2003");
let liFilme2 = document.createElement("li");
listaFilmes.appendChild(liFilme2);
liFilme2.innerHTML = `<strong>${filme2.mostrarDetalhes()}</strong>`;

let filme3 = new Filme("2012", "Roland Emmerich", "2009");
let liFilme3 = document.createElement("li");
listaFilmes.appendChild(liFilme3);
liFilme3.innerHTML = `<strong>${filme3.mostrarDetalhes()}</strong>`;

formFilme.addEventListener("submit", cadastrarFilme);

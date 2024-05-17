class Livro {
  constructor(titulo, autor) {
    this.titulo = titulo;
    this.autor = autor;
  }
  getTitulo() {
    return this.titulo;
  }
  getAutor() {
    return this.autor;
  }
  setTitulo(novoTitulo) {
    this.titulo = novoTitulo;
  }
  setAutor(novoAutor) {
    this.autor = novoAutor;
  }
  mostrarDetalhes() {
    return `Novo livro: ${this.titulo}, Autor: ${this.autor}`;
  }
}
function adicionarLivroNaLista(livro) {
  let liLivro = document.createElement("li");
  listaLivros.appendChild(liLivro);
  liLivro.innerHTML = `<strong>${livro.mostrarDetalhes()}</strong>`;
}
function cadastrarLivro(event) {
  event.preventDefault(); // Impede o envio do formulário e mudança de página
  const titulo = document.getElementById("titulo").value;
  const autor = document.getElementById("autor").value;
  const livro = new Livro(titulo, autor); // Cria um novo livro
  adicionarLivroNaLista(livro); // Adiciona o livro à lista
  document.getElementById("titulo").value = ""
  document.getElementById("autor").value = ""

}
const formLivro = document.getElementById("formLivro");

let listaLivros = document.getElementById("livros");

let livro1 = new Livro("O Ladrão de Raios", "Rick Riordan");
let liLivro1 = document.createElement("li");
listaLivros.appendChild(liLivro1);
liLivro1.innerHTML = `<strong>${livro1.mostrarDetalhes()}</strong>`;

let livro2 = new Livro("O Diário de um Banana", "Jeff Kinney");
let liLivro2 = document.createElement("li");
listaLivros.appendChild(liLivro2);
liLivro2.innerHTML = `<strong>${livro2.mostrarDetalhes()}</strong>`;

let livro3 = new Livro("Harry Potter", "J. K. Rowling");
let liLivro3 = document.createElement("li");
listaLivros.appendChild(liLivro3);
liLivro3.innerHTML = `<strong>${livro3.mostrarDetalhes()}</strong>`;

livro3.setAutor("Suzana a melhor!!");
liLivro2.innerHTML = `<strong>${livro2.mostrarDetalhes()}</strong>`;

formLivro.addEventListener("submit", cadastrarLivro);

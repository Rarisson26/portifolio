/* 
 Objetivo 1- quando o usuário clicar no botão de mostrar mais deve abrir os projetos que são escondidos no HTML

 Passo 1 - pegar o botão mostrar mais no JS pra poder verificar quando o usúario clicar em cima dele 

 Passo 2 - identificar o clique no botão 

 passo 3 - adicionar a classe ativo nos projetos escondidos 

 Objetivo 2 - esconder o botão de mostrar mais 
 
 Passo 1 - pegar o botão e esconder ele 

*/

// Objetivo 1- quando o usuário clicar no botão de mostrar mais deve abrir os projetos que são escondidos no HTML

// Passo 1 - pegar o botão mostrar mais no JS pra poder verificar quando o usúario clicar em cima dele
const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');

botaoMostrarProjetos.addEventListener('click', () => {
    //passo 3 - adicionar a classe ativo nos projetos escondidos
projetosInativos.forEach(projetosInativos => {
    projetosInativos.classList.add('ativo');
  });

  //Objetivo 2 - esconder o botão de mostrar mais 
  //Passo 1 - pegar o botão e esconder ele
  botaoMostrarProjetos.classList.add("remover")
});
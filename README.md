# CineTrack

O CineTrack é uma aplicação web desenvolvida para a disciplina de Programação de Sistemas Web. O projeto permite organizar filmes em uma coleção pessoal, registrando informações (ano, genero, nota e comentário) e acompanhando o status de cada filme(quero assistir, assistindo e assistido).

## Tecnologias

- HTML
- CSS
- JavaScript

## Como executar

1. Clone ou baixe este repositório.
2. Abra a pasta do projeto no VS Code.
3. Execute o arquivo `index.html` em um navegador. Recomenda-se utilizar a extensão Live Server para facilitar o desenvolvimento.

## Funcionalidades

- Listagem de filmes em cards.
- Cadastro e edição de filmes por meio de um formulário modal.
- Busca de filmes por título + combinação com filtro de status.
- Filtro por status: assistido, assistindo e quero assistir.
- Ordenação de filmes por título, ano e nota.
- Persistência dos dados no Local Storage, mantendo a coleção após recarregar a página.
- Carregamento dos seis filmes iniciais na primeira visita.
- Validação dos dados do formulário.

## Persistência de dados

Os filmes são armazenados no Local Storage do navegador, utilizando a chave `cinetrack:filmes`. Os dados permanecem salvos no mesmo navegador até serem removidos.


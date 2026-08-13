Cadastro do filme com 
- titulo
- ano
- gênero
- pôster
- status
- nota 
- comentário

Áreas da interface:
- busca por título
- filtro de status
- lista de filmes
- formulário de cadastro

tabela ação x método x rota
AÇÃO    MÉTODO  ROTA
listar   GET    /filmes
buscar   GET    /filmes/:id
cadastrar POST  /filmes
editar   PUT    /filmes/:id
remover  DELETE /filmes/:id
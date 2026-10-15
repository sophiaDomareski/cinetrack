## 1. Primeira requisição
- Site analisado: MDN Web Docs
- Método: GET
- URL: `https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Guides/Overview`
- Código de status: 304 Not Modified

## CSS
- URL: `https://developer.mozilla.org/static/client/styles-left-sidebar.46e37af4d0b5c883.css`
- Código de status: 200 OK (from disk cache)
- Content-Type: text/css

## JS
- URL: `https://developer.mozilla.org/static/client/7065.068ab3b30f8d33fa.js`
- Status code: 200 OK (from disk cache)
- Content type: text/javascript

## Imagem
- URL: https://developer.mozilla.org/static/client/x.4c7e68bf52af030a.svg
- Status code: 200 OK (from disk cache)
- Content-type: image/svg+xml

## Edição da URL
- URL solicitada: `https://developer.mozilla.org/pt-BR/esta-pagina-nao-existe-12345`
- Código de status:404 Not Found
Diferentemente da primeira requisição, que retornou `304 Not Modified` e permitiu reutilizar
uma versão armazenada em cache, esta requisição retornou `404 Not Found`, indicando que o recurso solicitado não foi encontrado. 
O navegador recebeu uma resposta de erro para o caminho inexistente.

## Fetch/XHR
- Site analisado: YouTube
- Ação realizada: Navegação/carregamento de dados do site
- Método: POST
- URL: `https://m.youtube.com/youtubei/v1/guide?prettyPrint=false`
- Caminho: `/youtubei/v1/guide`
- Código de status: 200 OK
Comparação com o CineTrack: A requisição observada no YouTube utiliza o método POST e a rota `/youtubei/v1/guide` para solicitar dados
relacionados à navegação do site. No CineTrack, a tabela de rotas define o método GET e a rota `/filmes` para listar os filmes.
Embora os sites utilizem métodos e rotas diferentes, ambos seguem o princípio de que o método HTTP representa a operação solicitada e a
rota identifica o recurso envolvido.

## Método e rota Cinetrack
Na Parte 2, o CineTrack utilizará o método `GET` e a rota `/filmes` para listar os filmes cadastrados. 
Como se trata de uma operação de consulta, a requisição não precisa enviar dados de um filme no corpo. 
A resposta deverá conter uma coleção de filmes, preferencialmente em formato JSON, com os dados necessários para exibir cada filme na interface, 
como título, ano, gênero, nota, status de visualização e URL do pôster.

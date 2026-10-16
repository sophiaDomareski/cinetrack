CASO 1: adicionar um filme válido: o card aparece sem recarregar;
Resultado esperado: a adição do filme ocorrer instantâneamente, sem ter que recarregar a página para aparecer.
Passou ou falhou? Passou
Se falhou, qual correção foi feita?

CASO 2: 
enviar ano fora da faixa: o erro aparece na interface e nada é salvo;
Resultado esperado: mensagem de alerta do erro de data e instrução para o usuário arrumar, só enviar e processar os dados quando estiverem válidos.
Passou ou falhou? Passou.
Se falhou, qual correção foi feita?

CASO 3:
editar um filme: o card certo muda, sem duplicar;
Resultado esperado: ao editar não criar outro card, gerando duplicatas, mas sim atualizar o próprio.
Passou ou falhou? Passou.
Se falhou, qual correção foi feita?

CASO 4: 
remover e cancelar a confirmação: o filme continua;
Resultado esperado: remoção do filme apenas quando confirmada, o cancelar funciona.
Passou ou falhou? Passou.
Se falhou, qual correção foi feita?


CASO 5:
busca + filtro de status juntos: os dois critérios combinam;
Resultado esperado: ao buscar um filme usando um filtro de status, como 'assistindo', fazer a busca apenas entre os filmes com esse filtro.
Passou ou falhou? Passou.
Se falhou, qual correção foi feita?


CASO 6:
recarregar a página: a lista persiste;
Resultado esperado: persistência correta, lista de filmes armazenada mesmo que tenha sido alterada anteriormente.
Passou ou falhou? Passou.
Se falhou, qual correção foi feita?


CASO 7:
Esc e Cancelar fecham o modal;
Resultado esperado: tanto o esc do teclado quanto o cancelar da interface funcionam como saídas do modal.
Passou ou falhou? Passou.
Se falhou, qual correção foi feita?

CASO 8:
primeira visita (limpe a chave cinetrack:filmes na aba Application): os 6 filmes canônicos carregam.
Resultado esperado: Ao limpar a chave cinetrack:filmes e recarregar a página, os 6 filmes canônicos são carregados novamente e salvos no Local Storage.
Passou ou falhou? Passou.
Se falhou, qual correção foi feita?
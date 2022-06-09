canActivate é usado para impedir que usuários não autorizados acessem determinadas rotas. Consulte os documentos para obter mais informações.

canLoad é usado para evitar que o aplicativo carregue módulos inteiros lentamente se o usuário não estiver autorizado a fazê-lo.

CanActivate - Decide se uma rota pode ser ativada, este guarda pode não ser o melhor caminho para módulos de recursos que são carregados com preguiça, pois esse guarda sempre carregará o módulo na memória, mesmo se o guarda retornar falso, o que significa que o usuário não está autorizado a acessar o percurso.

CanLoad - Decide se um módulo pode ser carregado lentamente, Controla se uma rota pode ser carregada. Isso se torna útil para módulos de recursos que são carregados lentamente. Eles nem carregarão se o guarda retornar falso.
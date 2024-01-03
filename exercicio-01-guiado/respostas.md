# Exercício Guiado 01 (Parte 1)

1. O que aconteceu ao digitar cada linha do código Javascript no console? O que foi exibido na tela do console?

Resposta:
Foram definidas as constantes e atribuídos os nomes correspondentes, porém na constante "1984" acusou um erro, pois não pode inicializar uma variável com números.

2. Ao digitar a chave da variável para o livro "O Bem-Amado", OBemAmado, o que aconteceu? Por que você acha que isso ocorreu? Qual é a justificativa para esse comportamento?

Resposta:
Ocorreu um erro alertando que a variável não foi definida.
Isso ocorreu porque a variável não foi declarada inicialmente no código. 

3. O que aconteceu ao tentar atualizar o nome do aluno "Francisco José" para "Allan José" utilizando var OBemAmado = "Allan José";? Qual é a mensagem que apareceu no console? O que faria para contornar esse problema?

Resposta:
Foi utilizado const ao declarar a primeira variável, seguindo o padrão das variáveis anteriores:
"const oBemAmado = "Allan José";"
Ao tentar reatribuir o valor ocorreu um erro pois não é possível alterar o valor de uma variável constante.
Cannot redeclare block-scoped variable 'oBemAmado'.
Para contornar o erro alterei a declaração da variável para let, pois a reatribuição de valores.

# Exercício Guiado 01 (Parte 2)
1. O que apareceu ao digitar nomeAluno2002; e matricula2002;? O que acha que aconteceu?

Resposta: 
Ocorreu um erro "nomeAluno2002 is not defined"
Ocorreu um erro "matricula2002 is not defined"
Porque as variáveis não foram declaradas anteriormente.

2. Ao digitar let nomeAluno2002; e let matricula2002;, o que aconteceu ao digitar essas variáveis no console?

Resposta:
Ocorreu um erro "nomeAluno2002 is not defined"
Ocorreu um erro "matricula2002 is not defined"
Porque a variável foi apenas inicializada porém sem valor atribuído.

3. Ao digitar typeof nomeAluno15; e typeof matricula15;, o que apareceu? O que acha que aconteceu?

Resposta:
Imprimiu no console string e number.
Porque o tipo da atribuição da variável "nomeAluno15" é uma String, e a variável "matricula15" é um number.

4. Ao criar objetos para os alunos, o que aconteceu ao digitar aluno01.nome; e aluno01.matricula; no console? O que isso significa?

Resposta:
Imprimiu no console Francisco José e 235252. Funcionou corretamente pois o objeto foi declarado corretamente.

5. Ao adicionar a informação do livro emprestado ao objeto aluno01, o que aconteceu ao digitar aluno01.livroEmprestado = "O Bem-Amado"; no console? Qual seria a segunda forma de modificar essa informação? Aplique esse mesmo procedimento aos outros alunos.

Resposta:
Foi criado dentro do objeto aluno01 uma nova chave e valor, no caso o livroEmprestado e "O Bem-Amado".

6. Que tipo de variável poderia ser utilizada para organizar essas informações de uma maneira mais sucinta? O que aconteceu ao utilizar um array chamado alunos?

Resposta:
Poderia ser utilizada uma lista de array.
Acusou um erro undefined, pois aluno01 não recebeu um valor.

7. Ao criar um array chamado estudantes e fazer const estudantes = alunos, o que aconteceu? Como isso poderia ser resolvido? O que aconteceu ao usar const estudantes = [...alunos]? Isso pode se estender aos objetos?

Resposta:
Isso resultou em uma cópia do array, evitando que um array afete o outro.
Sim, pode se estender aos objetos.


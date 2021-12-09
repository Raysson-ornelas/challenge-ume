# Desafio Robot Nasa

Bem vindo ao repositório do desafio Robot Nasa, na qual foi um projeto desenvolvido como parte do processo seletivo da empresa [UME](https://www.portal.ume.com.br/).

![Ilustação do app](./public/board.png?raw=true=10x20 "Tela do app")
  
## Como funciona o Robot Nasa

Dado a entrada de uma `string` é apresentado no tabuleiro a atualização da posição do robô. A string pode conter 'L', 'R' e 'M',  onde 'M' faz o robô se deslocar para frente, a letra 'L' faz o robô virar 90 graus para a esquerda e o 'R' faz o robô virar 90 graus para a direita.
  
## Executando o projeto

Após clonar o projeto instale as dependências com yarn utilizando o comando `yarn run`. Em seguida rode os seguintes comandos:

```bash
npm run dev
# or
yarn dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.

## Ferramentas

Foi utilizado para o desenvolvimento do projeto a linguagem `JavaScript` com a biblioteca [Rect](https://reactjs.org/) juntamente com o framework [Next.js](https://nextjs.org/). E para as estilizações foi usado o [Chakra UI](https://chakra-ui.com/) na qual ofereceu uma maior praticidade no desenvolvimento do layout. Para a gestão de dependências foi usado a biblioteca yarn.

Foi utilizado o projects do github para documentar as tarefas de acordo com as necessidades. [Veja aqui](https://github.com/Raysson-ornelas/challenge-ume/projects/1) o quadro.

## Método usado para o desenvolvimento

1. Foi desenvolvido o layout do projeto usando o Chakra UI como pre processador de css. 
2. Criação dos componentes divididos da seguinte forma:  Board (responsável por criar o layout do site e do board separando os Squares do Controls), Squares (na qual cria cada um dos quadrados) e Controls (que fica responsavel por conter os botões o campo de input e o campo de alerta dos erros). Estudo sobre useState e useContext.
3. Aplicação do useState e useContext, onde foi criado o gameContext responsável por  criar os estados da aplicação.
4. Criação da calculateMoveRobot na qual fica com a responsabilidade de calcular as coordenadas baseada na coordenada atual e para qual ponto cardeal esta sendo apontado.
5. Tratamento dos erros ao inserir inputs inválidos.

## Próximos passos

Dado o tempo para a execução do projeto o mesmo se encontra na versão 0. Para a próxima versão foi visto os seguintes pontos para desenvolvimento:

- Tratar para que não seja possível inserir `string` com letras diferentes das definidas.
- Estudar e utilizar o superset `Typescript`.
- Estudar mais o `JavaScript` para remover os `let` excessivos, reduzi a quantidade de `for`.
- Passar a função que calcula os movimentos do robô para uma API.

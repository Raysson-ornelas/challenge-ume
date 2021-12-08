# Desafio Robot Nasa

Bem vindo ao repositorio do desafio robot Nasa, na qual foi um projeto desenvolvido como parte do processo seletivo da empresa [UME](https://www.portal.ume.com.br/).

![Ilustação do app](./public/board.png?raw=true=10x20 "Tela do app")
  
## Como funciona o Robot Nasa

Dado a entrada de uma `string` é apresentado no tabuleiro a atualização da posição do robo. A string pode conter 'L', 'R' e 'M',  onde 'M' faz o robo se deslocar para frente, a letra 'L' faz o robo virar 90 graus para a esqueda e o 'R' faz o robo virar 90 graus para a direita.
  
## Executando o projeto

Após clonar o projeto instale as dependências com yarn utilizando o comando `yarn run`. Em seguida rode os seguintes comandos:

```bash
npm run dev
# or
yarn dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.

## Ferramentas

Foi utilizado para o desenolvimento do projeto a linguagem `JavaScript` com a biblioteca [Rect](https://reactjs.org/) juntamente com o framework [Next.js](https://nextjs.org/). E para as estilizações foi usado o [Chakra UI](https://chakra-ui.com/) na qual ofereceu uma maior praticidade no desenvolvimento do layout.

## Melhorias

Dado o tempo para a execução do projeto o mesmo se enconta na versão 0. Como versão 1 foi visto os seguintes pontos para desenvolvimento:

- Tratar os erros ao passar a quantidade de casas disponiveis para movimento.
- Tratar para que não sejá possivel inserir `string` com letras diferentes das definidas.
- Estudar e utilizar o superset `Typescript`.
- Estudar mais o `JavaScript` para remover os `let` excessivos, reduzi a quantidade de `for`.
- Passar a função que calcula os movimentos do robo para uma API.

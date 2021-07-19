# Rarify

## Conceito

A ideia é calcular 2 valores interessantes para qualquer página web: sua "raridade" e qual é a menor sequência de caractéres necessária para encontrar a página.

Por exemplo, uma página da Deep Web não é indexada por sites como o Google, portanto **seu valor de raridade é 1.**
Agora, o [Facebook](https://www.facebook.com/) é uma página tão popular que apenas digitar ["f"](https://www.google.com/search?q=f&oq=f&aqs=chrome..69i57j69i59j69i60l6.2576j0j4&sourceid=chrome&ie=UTF-8) no google já é capaz de encontrar-la e **seu valor de raridade é 0.**

A pergunta proposta é: é possível se medir a "raridade" uma página web qualquer entre [0,1]? O que uma página de raridade 0.8 significa? Quais os meios usados para se chegar em tal página (cliques em links ou pesquisas mais precisas)? A ideia deste projeto é conseguir calcular uma solução para esse problema.

Os meios aos quais faremos isso serão:
- Usar buscas em grafos e fluxo para calcular a dificuldade de se achar uma página web a partir de outras páginas
- Usar programação dinâmica para calcular os termos mínimos necessários para se encontrar algo.

## Protótipo

![simplescreenrecorder-2021-07-19_13 31 13](https://user-images.githubusercontent.com/45462822/126213969-e6f1a8f4-242e-4d8e-8c2a-0b940cbeffc7.gif)



## Desafios Técnicos

### Capacidade de busca

Muitas buscas de página web + extração de dados contidos no HTML. 

É estimado que cada busca demore 1 segundo, e um serviço como um [EC2 na amazon](https://aws.amazon.com/ec2/) consegue fazer centenas simultâneamente com threads, portanto vamos supor de antemão que 100 outbound requests por segundo podem ser feitas. Esta suposição será avaliada...

### Problema de termos mínimos

Alguma heurística deverá ser criada para se discernir quais dos vários de links serão investigados mais a fundo em relação a outros para cada página. A ideia seria usar um match de keywords com LCS referênciadas pelo conteúdo dentro da tag (eg.: `<a>keyword1 bla bla keyword2 bla</a>`). Com isso, poderíamos propor várias sugestões de termos (palavras/letras/espaços) para um algoritmo knapsack que escolherá adotar alguns deles dentro de um limite de caracteres (que seria o peso máximo da mochila), o peso de cada termo é equivalente ao número de caracteres alfanuméricos contido nele, com o limite máximo de 1 espaço entre caracteres alfanuméricos.

### Problema de fluxo

TODO

### Problema de cáculo de raridade

Este cálculo é a pergunta que este projeto tenta responder: existe alguma forma de atribuir algum valor de "raridade" para alguma página web a partir de pesquisas no Google?

A solução aqui poderá envolver um algoritmo dividir para conquistar, ou seja, cada um dos problema

### Representações

O frontend será feito em React, devido a experência pessoal do autor com a ferramenta. A biblioteca de plot de nodos poderá ser a [anychart](https://www.anychart.com/blog/2020/07/22/network-graph-javascript/), [arbor.js](http://arborjs.org/) (já utilizada pelo [autor](https://github.com/RenatoBrittoAraujo/The-Tree-of-Knowledge-) nesse projeto) ou até mesmo o HTML5 canvas com código especial para cumprir tal tarefa.

### Backend

Os algoritmos estarão presentes apenas no backend, o frontend apenas será atualizado. O backend poderá ser feito em [node.js](https://nodejs.org/en/).

### Deploy

Será feito em [AWS EC2](https://aws.amazon.com/ec2/).

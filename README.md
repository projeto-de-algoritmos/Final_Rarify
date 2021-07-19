# Final_Rarify

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

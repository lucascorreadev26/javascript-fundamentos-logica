# Exercício 07 - Maior de Idade

## Problema
Receba uma idade e informe se a pessoa é maior de idade.

## Entrada
18 / 15  

## Saída esperada
Maior / Menor 

## Raciocínio
1. Criar variável para receber e armazenar a idade do usuário.
2. Criar variável para receber o valor de input e forçar a tipagem para Number.
3. Criar as condicionais para verificação do número.
4. 1º Verificação: Se o input for vazio OU se o input for NaN OU se o input conter espaços, será retornado: Digite um número válido.
5. 2º Vefificação: Se o número (já convertido para tipo numerico) for divido por 2 com resto 0, será retornado: Você digitou um número Par.
6. 3º Verificação: Se nenhuma dessas condições acima forem satisfeitas o código entrará no ELSE, retornando: Você digitou um número Ímpar.

## Conceitos usados
- Variáveis
- Métodos internos: prompt() / Number() / console.log() / isNaN() / includes() 
- Condicionais: if else 
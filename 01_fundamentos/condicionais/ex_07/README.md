# Exercício 07 - Maior de Idade

## Problema
Receba uma idade e informe se a pessoa é maior de idade.

## Entrada
18 / 15  

## Saída esperada
Maior / Menor 

## Raciocínio
1. Criar variável para receber e armazenar a idade do usuário.
2. Criar função para verificar a idade.
3. Criar as condicionais para verificação do número.
4. 1º Verificação: Se o input for vazio OU se o input for NaN OU se o input conter espaços, será retornado: Digite um número válido.
5. 2º Vefificação: Se a idade (já convertido para tipo numerico) for menor que 18, será retornado: Você é menor de idade.
6. 3º Vefificação: Se a idade (já convertido para tipo numerico) for maior que 18, será retornado: Você é maior de idade.

## Conceitos usados
- Variáveis
- Métodos internos: prompt() / Number() / console.log() / isNaN() / includes() 
- Condicionais: if else 
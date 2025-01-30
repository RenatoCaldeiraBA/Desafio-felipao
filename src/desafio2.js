// Segundo desafio do Felipao - Crie uma função que recebe como parâmetro a quantidade de vitórias
// e derrotas de um jogador,depois disso retorne o resultado para uma variável,o saldo de Rankeadas
// deve ser feito através do calculo (vitórias - derrotas)
// Função que calcula o saldo de vitórias e derrota e determina o nível do jogador
function calcularNivel(vitorias, derrotas) {
  // Calculando o saldo de vitórias
  let saldoVitorias = vitorias - derrotas;

  // Definindo o nível de acordo com o saldo de vitórias
  let nivel;
  if (saldoVitorias < 10) {
    nivel = 'Ferro';
  } else if (saldoVitorias >= 10 && saldoVitorias <= 20) {
    nivel = 'Bronze';
  } else if (saldoVitorias >= 21 && saldoVitorias <= 50) {
    nivel = 'Prata';
  } else if (saldoVitorias >= 51 && saldoVitorias <= 80) {
    nivel = 'Ouro';
  } else if (saldoVitorias >= 81 && saldoVitorias <= 90) {
    nivel = 'Diamante';
  } else if (saldoVitorias >= 91 && saldoVitorias <= 100) {
    nivel = 'Ascendente';
  } else {
    nivel = 'Deus da Guerra';
  }

  // Retornando o saldo de vitórias e o nível
  return { saldoVitorias, nivel };
}

// Exemplo de chamada da função
let vitorias = 91;
let derrotas = 23;

// Obtendo o resultado
let resultado = calcularNivel(vitorias, derrotas);

// Exibindo a mensagem final
console.log(`O Herói tem de saldo de ${resultado.saldoVitorias} e está no nível de ${resultado.nivel}`);

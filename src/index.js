// Desafio do Felipão da DIO
// Criar uma variável para armazenar o nome e a quantidade  de xp de um herói 
// (nome do heroi escolhido :garen), e depois ultilizar uma estrutura de decisão
// para apresentar uma classificação de nivel de acordo com o xp adquirido.

// Definindo o herói com nome e quantidade de XP
let heroi = {
    nome: "Garen",
    xp: 7002
};
// Função para determinar o rank com base no XP
function classificarRank(xp) {
    if (xp < 1000) {
        return "Ferro";
    } else if (xp >= 1001 && xp < 2000) {
        return "Bronze";
    } else if (xp >= 2001 && xp < 3000) {
        return "Prata";
    } else if (xp >= 3001 && xp < 5000) {
        return "Ouro";
    } else if (xp >= 5001 && xp < 7000) {
            return "Platina";
    } else if (xp >= 7001 && xp < 9000) {
                return "Diamante";
    } else {
        return "Ascendente";
    }
}

// Classificando o rank do herói
let rank = classificarRank(heroi.xp);

// Exibindo o resultado
console.log(`O herói de nome ${heroi.nome} está no nível de ${rank}.`);
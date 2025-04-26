var idade = 67;

if (idade < 16) {
    console.log('`\nVocê tem ${idade} anos e ainda não pode votar.`');
} else if ((idade >= 16 && idade < 18) || (idade > 65)){
    console.log(`\nVocê tem ${idade} anos e seu voto é opcional.`);
} else {
    console.log('`\nVocê tem ${idade} anos e seu voto é obrigatório.`');
}

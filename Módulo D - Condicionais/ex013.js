// var hora = 21;
var hora = new Date();
var agora = hora.getHours();

var nome = 'Leandro';

if (hora < 12) {
    console.log(`Bom dia ${nome}, são exatamente ${agora} horas.`);
} else if (hora <= 18) {
    console.log(`Boa tarde ${nome}, são exatamente ${agora} horas.`);
} else {
    console.log(`Boa noite ${nome}, são exatamente ${agora} horas.`);
}
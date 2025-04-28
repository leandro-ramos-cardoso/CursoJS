function contar() {
    var inicio = window.document.getElementById('txtinicio');
    var fim = window.document.getElementById('txtfim');
    var passo = window.document.getElementById('txtpasso');
    var resultado = window.document.getElementById('resultado');

    // // Zerando sempre que iniciar
    // resultado.innerHTML = '';

    // if (inicio == '') {
    //     resultado.innerHTML = `Impossivel contar`;
    // } else {
    //     for(cont = inicio; cont <= fim ; cont ++) {
    //         resultado.innerHTML += `${cont} 👉`;
    //         cont ++;
    //     }
    //     resultado.innerHTML += `🏁`;
    // }

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        // alert('[ERRO] - Faltam dados');
        resultado.innerHTML = 'Impossivel contar';
    } else {
        resultado.innerHTML = `Contando: `;
        let i = Number(inicio.value);
        let f = Number(fim.value);
        let p = Number(passo.value);

        if (p <= 0) {
            window.alert('Passo inválido');
        }

        if (i < f) {
            for(let c = i; c <= f; c += p){
                resultado.innerHTML += `${c} 👉`
            }
            resultado.innerHTML += `🏁`;
        } else {
            for (let c = i; c >= f; c -= p){
                resultado.innerHTML += `${c} 👉`
            }
            resultado.innerHTML += `🏁`;
        }
    }
}
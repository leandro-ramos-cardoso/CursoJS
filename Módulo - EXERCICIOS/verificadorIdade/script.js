function verificar() {
    // Selecionando ano atual do sistema
    var data = new Date();
    var ano = data.getFullYear();

    // Selecionando ano passado pelo usuário
    var fano = window.document.getElementById('txtano');

    var res = window.document.getElementById('res');

    if (fano.value == '') {
        window.alert('[ERRO] - Campo vazio tente novamente!');
    } else if (fano.value > ano) {
        window.alert('[ERRO] - Ano maior que o atual!');
    } else {
        var fsex = window.document.getElementsByName('radsex');
        var idade = ano - fano.value;
        // res.innerHTML = `Idade calculada: ${idade}`;

        var genero = '';

        var img = document.createElement('img')
        // Criando um ID img para foto (Ao inves de usar no HTML)
        img.setAttribute('id', 'foto');

        // Se o sexo for marcado como MASCULINO
        if (fsex[0].checked) {
            genero = 'Homem';
            if (idade >= 0 && idade < 10) {
                // CRIANCA
                img.setAttribute('src', 'foto-bebe-m.jpg');
            } else if (idade >= 10 && idade < 21) {
                // JOVEM
                img.setAttribute('src', 'foto-jovem-m.jpg');
            } else if (idade >= 21 && idade < 50) {
                // ADULTO
                img.setAttribute('src', 'foto-adulto-m.jpg');
            } else {
                // IDOSO
                img.setAttribute('src', 'foto-idoso-m.jpg');
            }
        } else {
            genero = 'Mulher';
            if (idade >= 0 && idade < 10) {
                // CRIANCA
                img.setAttribute('src', 'foto-bebe-f.jpg');
            } else if (idade >= 10 && idade < 21) {
                // JOVEM
                img.setAttribute('src', 'foto-jovem-f.jpg');
            } else if (idade >= 21 && idade < 50) {
                // ADULTO
                img.setAttribute('src', 'foto-adulto-f.jpg');
            } else {
                // IDOSO
                img.setAttribute('src', 'foto-idoso-f.jpg');
            }
        }

        img.style.width = '250px';
        img.style.height = '250px';
        img.style.borderRadius = '50%';
        img.style.objectFit = 'cover';

        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img);
    }
}
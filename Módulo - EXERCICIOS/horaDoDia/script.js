function carregar() {
    var msg = window.document.getElementById('mensagem');
    var foto = window.document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();
    // hora = 20
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        // BOM DIA!
        foto.src = 'bg-manha.jpg';
        window.document.body.style.background = '#e2cd9f';
        window.document.body.style.color = '#010101';
    } else if (hora >= 12 && hora <= 18) {
        // BOA TARDE!
        foto.src = 'bg-tarde.jpg'
        window.document.body.style.background = '#b9846f';
    } else {
        // BOA NOITE!
        foto.src = 'bg-noite.jpg'
        window.document.body.style.background = '#515154';
    }
}
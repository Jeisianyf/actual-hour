function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imgsrc')

    var data = new Date()
    var hora = data.getHours()
    var minute = data.getMinutes()

    msg.innerHTML = `Agora são ${hora}:${minute} <br/>`
    
    if (hora >= 5 && hora < 12) {
        //Bom dia
        img.src = './img/manha.png'
        document.body.style.background = '#f6d69b'
        msg.innerHTML += 'Bom Dia!'

    } else if (hora >= 12 && hora < 18) {
        msg.innerHTML += ''
        //Boa tarde
        img.src = './img/tarde.png'
        document.body.style.background = '#d2b0a7'
        msg.innerHTML += 'Boa Tarde!'

    } else {
        //Boa noite
        img.src = './img/noite.png'
        document.body.style.background = '#04101a'
        msg.innerHTML += 'Boa Noite!'
    }
}





window.onload = function carregar() {
    var dia = new Date()
    var dia = dia.getDate()
    var hora = new Date()
    var hora = hora.getHours()
    var minutos = new Date()
    var minutos = minutos.getMinutes()
    var diaSem = new Date()
    var diaSem = diaSem.getDay()
    var msg = window.document.getElementById('msg')
    var pic = window.document.getElementById('img')
    var body = window.document.getElementById('bd')


    switch (diaSem) {
        case 0: diaSem = "Domingo"
            break
        case 1: diaSem = "Segunda-Feira"
            break
        case 2: diaSem = "Terça-Feira"
            break
        case 3: diaSem = "Quarta-Feira"
            break
        case 4: diaSem = "Quinta-Feira"
            break
        case 5: diaSem = "Sexta-Feira"
            break
        case 8: diaSem = "Sábado"
            break
        default: diaSem = ""
            break

    }

    msg.innerHTML = `Hoje é ${diaSem}, dia ${dia} e são ${hora}:${minutos} hrs.`

    if (hora >= 0 && hora < 12) {
        pic.src = 'img/Manhã.jpg'
        bd.style.background = 'dodgerblue'


    } else if (hora >= 12 && hora < 18) {
        pic.src = 'img/Tarde.jpg'
        bd.style.background = 'orange'


    } else {
        pic.src = 'img/Noite.jpeg'
        bd.style.background = 'black'

    }

}

function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 /*verifica se a caixa esta vazia,se o comprimento é igual a zero*/ || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente')
        return;
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        res.innerHTML = `Idade Calculada :${idade}`
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')//no htmlé so colocar <img id='foto>
    }
    if (fsex[0].checked/*Se oque estiver marcado/checado,for fsex 0 é sinal que é masculino  */) {
        genero = 'Homem'
        if (idade > 0 && idade < 10) {
            //Crianca 
            img.setAttribute('src', 'bebe homem.jpg')
        } else if (idade >= 10 && idade < 21) {
            //Jovem
            img.setAttribute('src', 'jovem nome.jpg')


        } else if (idade < 50) {
            //Adulto
            img.setAttribute('src', 'homem adulto.jpg')

        }
        else {
            //Idoso
            img.setAttribute('src', 'idoso homem.jpg')

        }
    } else if (fsex[1].checked) {
        genero = 'Mulher'
        if (idade > 0 && idade < 10) {
            //Crianca 
            img.setAttribute('src', 'bebe mulher.jpg')
        } else if (idade >= 10 && idade < 21) {
            //Jovem
            img.setAttribute('src', 'jovem mulher.jpg')


        } else if (idade < 50) {
            //Adulto
            img.setAttribute('src', 'mulher adulta.jpg')

        }
        else {
            //Idoso
            img.setAttribute('src', 'idosa mulher.jpg')


        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anoss `
        res.appendChild(img)
    }
}
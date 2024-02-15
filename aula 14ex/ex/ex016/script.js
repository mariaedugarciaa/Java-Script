function contar()/*quando eu apertar o botao clicar , ele vai disparar essa função */ {
    var ini = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var passo = document.getElementById('txtp')
    var res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML='Imposivel Contar'
        //window.alert('[ERRO],Faltam dados !')
        
    }else {
        res.innerHTML = 'Contando...<br>'
        let i = Number(ini.value)//pego o valor que esta dentro de ini  e converto para um numero 
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p<=0){
            window.alert('Passo Invalido !Considerando passo 1 ')
            p=1
        }
        if (i < f) {
            //contagem crescente
            for(let c = 1 ; c <=f ;c+=p){
                res.innerHTML += `${c} \u{1F449}`
            }
        } else{
            //contagem regressiva
            for (let c = i ;c >= f ;c -= p){
                res.innerHTML+= `${c} \u{1F449}`
            }

        }
        res.innerHTML+= `\u{1F3C1}`
    }
}


            
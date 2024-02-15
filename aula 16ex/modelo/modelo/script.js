let num=document.querySelector('input#fnum')
let lista=document.querySelector('select#flista')
let res=document.querySelector('div#res')
let valores=[]
function inNumero(n){
    if(Number(n)>=1 && Number(n)<=100){
        return true
    } else{
        return false 
    }

}
function inLista(n,l){
    if(l.indexOf(Number(n))!=-1){
        return true
    } else{
        return false
    }

}


function adicionar(){
    if(inNumero(num.value) && !inLista(num.value,valores))/*/se o valor for um número e se esse valor não estiver na lista*/{
        valores.push(Number(num.value))//adicionar elemento no vetor
        let item=document.createElement('option')
        item.text=`Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML=''//quando conseguir asicionar um elemento,ele vai limpar o resultado 

    }else{
        window.alert('Valor invalido ou já encontrado na lista ')
    }
    num.value=''//recebe vazio pra esvaziar 
    num.focus()

}

function finalizar(){
    if (valores.length==0){
        window.alert('Adicione valores antes de finalizar')
    }else {
        let tot=valores.length
        let maior=valores[0]
        let menor = valores[0]
        let soma=0
        let media=0
        for (let pos in valores){
            soma+=valores[pos]//para ele somar o valor atual com um 
            if (valores[pos]>maior){
                maior=valores[pos]
            if (valores [pos]<menor)
                menor=valores[pos]
            }
        }
        media=soma/tot
        res.innerHTML=''
        res.innerHTML+=`<p>Ao todo temos ${tot} numeros cadastrados</p>`
        res.innerHTML+=`<p>O maior valor inflormado foi ${maior}</p>`
        res.innerHTML+=`<p>O menor valor inflormado foi ${menor}</p>`
        res.innerHTML+=`<p>Somando todos os valores , temos ${soma}</p>`
        res.innerHTML+=`<p>A média dos valores digitados é ${media}</p>`
    }

}
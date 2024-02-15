function carregar (){
    var msg=document.getElementById('msg')
    var imagem=document.getElementById('imagem')
    var data=new Date()
    var hora=data.getHours()
    
    msg.innerHTML=`Agora são ${hora} horas`
    if (hora >=0 && hora < 12){
        //BOM DIAA 
        imagem.src='pexels-deni-chandra-8074466.jpg'
        document.body.style.background='#e3cd9f'
    }else if (hora >= 12 && hora < 18){
        //BOA TARDEE
        imagem.src='pexels-anderson-martins-2386144.jpg'
        document.body.style.background='orange'

    }else{
        //BOA NOITTEE
        imagem.src='pexels-reynaldo-brigworkz-brigantty-771883.jpg'
        document.body.style.background='purple'
    }

    
}



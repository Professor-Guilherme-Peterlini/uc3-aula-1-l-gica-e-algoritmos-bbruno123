function media(a,b,c){
    media = (a+b+c)/3

    if (media >= 7){
        return 'aprovado'

    }else{
        return 'reprovado'
    }

}

module.exports = media;
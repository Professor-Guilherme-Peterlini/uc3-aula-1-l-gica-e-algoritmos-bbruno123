function media_nota(a,b,c){
    media_nota = (a+b+c)/3

    if (media_nota >= 7){
        return 'aprovado'

    }else{
        return 'reprovado'
    }

}

module.exports = media_nota;
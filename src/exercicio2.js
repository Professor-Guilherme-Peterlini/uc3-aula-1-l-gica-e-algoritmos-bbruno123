function verificarIdade (i) {
    if (i >= 18){
        return 'maior'
    }else if (i >= 0){
        return 'menor'
    }
}

module.exports = verificarIdade;

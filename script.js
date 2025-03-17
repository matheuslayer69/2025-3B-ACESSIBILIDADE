const aumentarFonteBotao = document.getElementById('aumentar-fonte')
const diminuirFonteBotao = document.getElementById(`diminuir-fonte`)

let tamanhoFonteAtual = 1; 

aumentarFonteBotao.addEventListener ('click',function() {
    tamanhoFonteAtual +=0.1;
    document.body.style.fontSize= `${tamanhoFonteAtual}rem`

})

diminuirFonteBotao.addEventListener ('click',function() {
tamanhoFonteAtual -= 0.1;
document.body.style.fontSize= `${tamanhoFonteAtual}rem`

})
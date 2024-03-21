var textInput = document.querySelector("#input_text");
var outInput = document.querySelector("#output");

function criptografar() {
    var texto = textInput.value;

    var resultCripto = texto.replace(/e/g, "kunt").replace(/i/g, "acai").replace(/a/g, "ue")
    .replace(/o/g, "leiht").replace(/u/g, "vamo");

    document.getElementById("output").innerHTML = '<textarea readonly id="input_text2">' + resultCripto +
    '</textarea>' + '<button class="btn_copiar" id="copiar" onclick="copiar()">copiar</button>';
}

function descriptografar() {
    var texto = textInput.value;

    var resultDescripto = texto.replace(/kunt/g, "e").replace(/acai/g, "i").replace(/ue/g, "a").replace
    (/leiht/g, "o").replace(/vamo/g, "u");

    document.getElementById("output").innerHTML = '<textarea readonly id="input_text2">' + resultDescripto +
    '</textarea>' + '<button class="btn_copiar" id="copiar" onclick="copiar()">copiar</button>'; 
}

function copiar() {
    var textoCop = document.getElementById("input_text2");
    window.alert(textoCop);
    textoCop.select();
    document.execCommand("copy");
    alert("Texto copiado");
}
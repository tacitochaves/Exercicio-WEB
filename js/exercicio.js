// carregando elementos
var botao = document.getElementById("enviar");
var tipoEmpresa = document.getElementById("tipo");
var resultado = document.getElementById("mensagem-modal");
var sobreposicao = document.getElementById("sobreposicao");
var fechar = document.getElementById("close");
var form = document.getElementById("frm-cli");

// submit form
botao.addEventListener('click', function(event) {
    
    // cancelando o comportamento padrão
    event.preventDefault();
    
    var obrigatorio = document.getElementsByClassName('obrigatorio');
 
    var retorno = undefined;
    
    for (var i = 0; i < obrigatorio.length; i++) {
        var elemento = obrigatorio[i];
        var tipoElemento = elemento.type;
        
        if ( tipoElemento == "text" ) {
            if ( elemento.value.trim() == "" ) {
                elemento.style.border = "1px solid red";
                retorno = true;            
            }
            else if ( elemento.value.trim() != "" ) {
                elemento.style.border = "1px solid #999";
            }
        }
        else if ( tipoElemento == "select-one" ) {
            if ( elemento.value.trim() == "" ) {
                elemento.style.border = "1px solid red";
                retorno = true;            
            }
            else if ( elemento.value.trim() != "" ) {
                elemento.style.border = "1px solid #999";
            }
        }
        
    }
        
    if (retorno) {
        
        // result in modal window
        resultado.innerHTML = 
            '<div class="icone">' + 
                '<i class="fa fa-informacao fa-3x">' + 
            '</i>' +
            '<p>' +
                'Os dados não foram inseridos corretamente.' +
            '</p>' +
            '<p>' +
                'Favor corrigir o problema!' +
            '</p>';
        resultado.style.display = "inline";
        sobreposicao.style.display = "inline";
    }
    else {
        // result in modal window
        resultado.innerHTML = 
            '<div class="icone">' + 
                '<i class="fa fa-sucesso fa-3x">' + 
            '</i>' +
            '<p>' +
                'Parabéns companheiro!!!' +
            '</p>' +
            '<p>' +
                'O seu formulário será submetido.' +
            '</p>';
        resultado.style.display = "inline-block";
        sobreposicao.style.display = "inline-block";
        form.reset();
    }
  
});

// ativa empresa
tipoEmpresa.addEventListener('click', function() {
    
    var esconderCampo1 = document.getElementById("pode-esconder1");
    var esconderCampo2 = document.getElementById("pode-esconder2");
    var esconderCampo3 = document.getElementById("pode-esconder3");
    
    if ( tipoEmpresa.checked ) {
        esconderCampo1.classList.add('esconder');
        esconderCampo2.style.display = "inline-block";
        esconderCampo3.classList.add('esconder');
    }
    else {
        esconderCampo1.classList.remove('esconder');
        esconderCampo2.style.display = "none";
        esconderCampo3.classList.remove('esconder');
    }

});

// fechar modal no botão
fechar.addEventListener('click', function() {
    sobreposicao.style.display = "none";
    resultado.style.display = "none";
});

// fechar modal nas sobreposições
sobreposicao.addEventListener('click', function() {
    sobreposicao.style.display = "none";
    resultado.style.display = "none";
});
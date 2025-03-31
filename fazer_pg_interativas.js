// Função para mostrar a tela escura
function showDarkScreen() {
document.getElementById('tela_estrelas').style.display = 'block';
setTimeout(hideDarkScreen, 1000); // Esconde a tela escura após 5 segundos
}


// Função para esconder a tela escura
function hideDarkScreen() {
    document.getElementById('tela_estrelas').style.display = 'none';
    }


    // Mostra a tela escura quando a página é carregada
    window.onload = showDarkScreen;
    //---------------------------------------------------------------------------------------------------------

    document.getElementById("linha_1").addEventListener("input", function() {
    // Adiciona um evento que é acionado sempre que o usuário digita algo no campo de entrada

    var texto_coletado1 = this.value;  // Pega o valor digitado pelo usuário no campo de entrada

    if (texto_coletado1.toLowerCase() === "i was") {
        this.className = "correct";  // Define a classe do campo de entrada como "correct"
    } else {
        this.className = "incorrect";  // Define a classe do campo de entrada como "incorrect"
    }

});

//================================================================================================================
// função dos botões voltar e avançar

// função avançar
function licao_2() {
    // Seleciona a tabela com o id 'vinte_frases' e a div com a classe 'botoes_2'
    const elements = document.querySelectorAll('#vinte_frases, .botoes_2');
    
    // Itera sobre os elementos selecionados e altera o estilo de display para 'block'
    elements.forEach(element => {
        element.style.display = 'block';
    });
}
//==================================================================================
// função voltar
function voltar_2(){

    // Seleciona a tabela com o id 'vinte_frases' e a div com a classe 'botoes_2'
    const elements = document.querySelectorAll('#vinte_frases, .botoes_2');
    
    // Itera sobre os elementos selecionados e altera o estilo de display para 'block'
    elements.forEach(element => {
        element.style.display = 'none';
    }); 
}
//===================================================================================

// função avançar
function licao_3() {
    // Seleciona a tabela com o id 'vinte_frases' e a div com a classe 'botoes_2'
    const elements = document.querySelectorAll('#trinta_frases, .botoes_3');
    
    // Itera sobre os elementos selecionados e altera o estilo de display para 'block'
    elements.forEach(element => {
        element.style.display = 'block';
    });
}
//==================================================================================
// função voltar
function voltar_3(){

    // Seleciona a tabela com o id 'vinte_frases' e a div com a classe 'botoes_2'
    const elements = document.querySelectorAll('#trinta_frases, .botoes_3');
    
    // Itera sobre os elementos selecionados e altera o estilo de display para 'block'
    elements.forEach(element => {
        element.style.display = 'none';
    }); 
}

//===================================================================================

// função avançar
function licao_4() {
    // Seleciona a tabela com o id 'vinte_frases' e a div com a classe 'botoes_2'
    const elements = document.querySelectorAll('#quarenta_frases, .botoes_4');
    
    // Itera sobre os elementos selecionados e altera o estilo de display para 'block'
    elements.forEach(element => {
        element.style.display = 'block';
    });
}
//==================================================================================
// função voltar
function voltar_4(){

    // Seleciona a tabela com o id 'vinte_frases' e a div com a classe 'botoes_2'
    const elements = document.querySelectorAll('#quarenta_frases, .botoes_4');
    
    // Itera sobre os elementos selecionados e altera o estilo de display para 'block'
    elements.forEach(element => {
        element.style.display = 'none';
    }); 
}

//===================================================================================

// função avançar
function licao_5() {
    // Seleciona a tabela com o id 'vinte_frases' e a div com a classe 'botoes_2'
    const elements = document.querySelectorAll('#cinquenta_frases, .botoes_5');
    
    // Itera sobre os elementos selecionados e altera o estilo de display para 'block'
    elements.forEach(element => {
        element.style.display = 'block';
    });
}
//==================================================================================
// função voltar
function voltar_5(){

    // Seleciona a tabela com o id 'vinte_frases' e a div com a classe 'botoes_2'
    const elements = document.querySelectorAll('#cinquenta_frases, .botoes_5');
    
    // Itera sobre os elementos selecionados e altera o estilo de display para 'block'
    elements.forEach(element => {
        element.style.display = 'none';
    }); 
}

//===================================================================================

// função avançar
function licao_6() {
    // Seleciona a tabela com o id 'vinte_frases' e a div com a classe 'botoes_2'
    const elements = document.querySelectorAll('#sessenta_frases, .botoes_6');
    
    // Itera sobre os elementos selecionados e altera o estilo de display para 'block'
    elements.forEach(element => {
        element.style.display = 'block';
    });
}
//==================================================================================
// função voltar
function voltar_6(){

    // Seleciona a tabela com o id 'vinte_frases' e a div com a classe 'botoes_2'
    const elements = document.querySelectorAll('#sessenta_frases, .botoes_6');
    
    // Itera sobre os elementos selecionados e altera o estilo de display para 'block'
    elements.forEach(element => {
        element.style.display = 'none';
    }); 
}

//===================================================================================

// função avançar
function licao_7() {
    // Seleciona a tabela com o id 'vinte_frases' e a div com a classe 'botoes_2'
    const elements = document.querySelectorAll('#setenta_frases, .botoes_7');
    
    // Itera sobre os elementos selecionados e altera o estilo de display para 'block'
    elements.forEach(element => {
        element.style.display = 'block';
    });
}
//==================================================================================
// função voltar
function voltar_7(){

    // Seleciona a tabela com o id 'vinte_frases' e a div com a classe 'botoes_2'
    const elements = document.querySelectorAll('#setenta_frases, .botoes_7');
    
    // Itera sobre os elementos selecionados e altera o estilo de display para 'block'
    elements.forEach(element => {
        element.style.display = 'none';
    }); 
}

//===================================================================================

// função avançar
function licao_8() {
    // Seleciona a tabela com o id 'vinte_frases' e a div com a classe 'botoes_2'
    const elements = document.querySelectorAll('#oitenta_frases, .botoes_8');
    
    // Itera sobre os elementos selecionados e altera o estilo de display para 'block'
    elements.forEach(element => {
        element.style.display = 'block';
    });
}
//==================================================================================
// função voltar
function voltar_8(){

    // Seleciona a tabela com o id 'vinte_frases' e a div com a classe 'botoes_2'
    const elements = document.querySelectorAll('#oitenta_frases, .botoes_8');
    
    // Itera sobre os elementos selecionados e altera o estilo de display para 'block'
    elements.forEach(element => {
        element.style.display = 'none';
    }); 
}

//===================================================================================

// função avançar
function licao_9() {
    // Seleciona a tabela com o id 'vinte_frases' e a div com a classe 'botoes_2'
    const elements = document.querySelectorAll('#noventa_frases, .botoes_9');
    
    // Itera sobre os elementos selecionados e altera o estilo de display para 'block'
    elements.forEach(element => {
        element.style.display = 'block';
    });
}
//==================================================================================
// função voltar
function voltar_9(){

    // Seleciona a tabela com o id 'vinte_frases' e a div com a classe 'botoes_2'
    const elements = document.querySelectorAll('#noventa_frases, .botoes_9');
    
    // Itera sobre os elementos selecionados e altera o estilo de display para 'block'
    elements.forEach(element => {
        element.style.display = 'none';
    }); 
}

//===================================================================================

// função avançar
function licao_10() {
    // Seleciona a tabela com o id 'vinte_frases' e a div com a classe 'botoes_2'
    const elements = document.querySelectorAll('#cem_frases, .botoes_10');
    
    // Itera sobre os elementos selecionados e altera o estilo de display para 'block'
    elements.forEach(element => {
        element.style.display = 'block';
    });
}
//==================================================================================
// função voltar
function voltar_10(){

    // Seleciona a tabela com o id 'vinte_frases' e a div com a classe 'botoes_2'
    const elements = document.querySelectorAll('#cem_frases, .botoes_10');
    
    // Itera sobre os elementos selecionados e altera o estilo de display para 'block'
    elements.forEach(element => {
        element.style.display = 'none';
    }); 
}

//===================================================================================

// função avançar
function licao_11() {
    // Seleciona a tabela com o id 'vinte_frases' e a div com a classe 'botoes_2'
    const elements = document.querySelectorAll('#cem10_frases, .botoes_11');
    
    // Itera sobre os elementos selecionados e altera o estilo de display para 'block'
    elements.forEach(element => {
        element.style.display = 'block';
    });
}
//==================================================================================
// função voltar
function voltar_11(){

    // Seleciona a tabela com o id 'vinte_frases' e a div com a classe 'botoes_2'
    const elements = document.querySelectorAll('#cem10_frases, .botoes_11');
    
    // Itera sobre os elementos selecionados e altera o estilo de display para 'block'
    elements.forEach(element => {
        element.style.display = 'none';
    }); 
}

//===================================================================================

// função avançar
function licao_12() {
    // Seleciona a tabela com o id 'vinte_frases' e a div com a classe 'botoes_2'
    const elements = document.querySelectorAll('#cem20_frases, .botoes_12');
    
    // Itera sobre os elementos selecionados e altera o estilo de display para 'block'
    elements.forEach(element => {
        element.style.display = 'block';
    });
}
//==================================================================================
// função voltar
function voltar_12(){

    // Seleciona a tabela com o id 'vinte_frases' e a div com a classe 'botoes_2'
    const elements = document.querySelectorAll('#cem20_frases, .botoes_12');
    
    // Itera sobre os elementos selecionados e altera o estilo de display para 'block'
    elements.forEach(element => {
        element.style.display = 'none';
    }); 
}

//===================================================================================

// função avançar
function licao_13() {
    // Seleciona a tabela com o id 'vinte_frases' e a div com a classe 'botoes_2'
    const elements = document.querySelectorAll('#cem30_frases, .botoes_13');
    
    // Itera sobre os elementos selecionados e altera o estilo de display para 'block'
    elements.forEach(element => {
        element.style.display = 'block';
    });
}
//==================================================================================
// função voltar
function voltar_13(){

    // Seleciona a tabela com o id 'vinte_frases' e a div com a classe 'botoes_2'
    const elements = document.querySelectorAll('#cem30_frases, .botoes_13');
    
    // Itera sobre os elementos selecionados e altera o estilo de display para 'block'
    elements.forEach(element => {
        element.style.display = 'none';
    }); 
}

//===================================================================================

// função avançar
function licao_14() {
    // Seleciona a tabela com o id 'vinte_frases' e a div com a classe 'botoes_2'
    const elements = document.querySelectorAll('#cem40_frases, .botoes_14');
    
    // Itera sobre os elementos selecionados e altera o estilo de display para 'block'
    elements.forEach(element => {
        element.style.display = 'block';
    });
}
//==================================================================================
// função voltar
function voltar_14(){

    // Seleciona a tabela com o id 'vinte_frases' e a div com a classe 'botoes_2'
    const elements = document.querySelectorAll('#cem40_frases, .botoes_14');
    
    // Itera sobre os elementos selecionados e altera o estilo de display para 'block'
    elements.forEach(element => {
        element.style.display = 'none';
    }); 
}

//===================================================================================

// função avançar
function licao_15() {
    // Seleciona a tabela com o id 'vinte_frases' e a div com a classe 'botoes_2'
    const elements = document.querySelectorAll('#cem50_frases, .botoes_15');
    
    // Itera sobre os elementos selecionados e altera o estilo de display para 'block'
    elements.forEach(element => {
        element.style.display = 'block';
    });
}
//==================================================================================
// função voltar
function voltar_15(){

    // Seleciona a tabela com o id 'vinte_frases' e a div com a classe 'botoes_2'
    const elements = document.querySelectorAll('#cem50_frases, .botoes_15');
    
    // Itera sobre os elementos selecionados e altera o estilo de display para 'block'
    elements.forEach(element => {
        element.style.display = 'none';
    }); 
}

//===================================================================================

// função avançar
function licao_16() {
    // Seleciona a tabela com o id 'vinte_frases' e a div com a classe 'botoes_2'
    const elements = document.querySelectorAll('#cem60_frases, .botoes_16');
    
    // Itera sobre os elementos selecionados e altera o estilo de display para 'block'
    elements.forEach(element => {
        element.style.display = 'block';
    });
}
//==================================================================================
// função voltar
function voltar_16(){

    // Seleciona a tabela com o id 'vinte_frases' e a div com a classe 'botoes_2'
    const elements = document.querySelectorAll('#cem60_frases, .botoes_16');
    
    // Itera sobre os elementos selecionados e altera o estilo de display para 'block'
    elements.forEach(element => {
        element.style.display = 'none';
    }); 
}

//===================================================================================

// função avançar
function licao_17() {
    // Seleciona a tabela com o id 'vinte_frases' e a div com a classe 'botoes_2'
    const elements = document.querySelectorAll('#cem70_frases, .botoes_17');
    
    // Itera sobre os elementos selecionados e altera o estilo de display para 'block'
    elements.forEach(element => {
        element.style.display = 'block';
    });
}
//==================================================================================
// função voltar
function voltar_17(){

    // Seleciona a tabela com o id 'vinte_frases' e a div com a classe 'botoes_2'
    const elements = document.querySelectorAll('#cem70_frases, .botoes_17');
    
    // Itera sobre os elementos selecionados e altera o estilo de display para 'block'
    elements.forEach(element => {
        element.style.display = 'none';
    }); 
}

//===================================================================================

// função avançar
function licao_18() {
    // Seleciona a tabela com o id 'vinte_frases' e a div com a classe 'botoes_2'
    const elements = document.querySelectorAll('#cem80_frases, .botoes_18');
    
    // Itera sobre os elementos selecionados e altera o estilo de display para 'block'
    elements.forEach(element => {
        element.style.display = 'block';
    });
}
//==================================================================================
// função voltar
function voltar_18(){

    // Seleciona a tabela com o id 'vinte_frases' e a div com a classe 'botoes_2'
    const elements = document.querySelectorAll('#cem80_frases, .botoes_18');
    
    // Itera sobre os elementos selecionados e altera o estilo de display para 'block'
    elements.forEach(element => {
        element.style.display = 'none';
    }); 
}

//===================================================================================

// função avançar
function licao_19() {
    // Seleciona a tabela com o id 'vinte_frases' e a div com a classe 'botoes_2'
    const elements = document.querySelectorAll('#cem90_frases, .botoes_19');
    
    // Itera sobre os elementos selecionados e altera o estilo de display para 'block'
    elements.forEach(element => {
        element.style.display = 'block';
    });
}
//==================================================================================
// função voltar
function voltar_19(){

    // Seleciona a tabela com o id 'vinte_frases' e a div com a classe 'botoes_2'
    const elements = document.querySelectorAll('#cem90_frases, .botoes_19');
    
    // Itera sobre os elementos selecionados e altera o estilo de display para 'block'
    elements.forEach(element => {
        element.style.display = 'none';
    }); 
}

//===================================================================================

// função avançar
function licao_20() {
    // Seleciona a tabela com o id 'vinte_frases' e a div com a classe 'botoes_2'
    const elements = document.querySelectorAll('#duzentos_frases, .botoes_20');
    
    // Itera sobre os elementos selecionados e altera o estilo de display para 'block'
    elements.forEach(element => {
        element.style.display = 'block';
    });
}
//==================================================================================
// função voltar
function voltar_20(){

    // Seleciona a tabela com o id 'vinte_frases' e a div com a classe 'botoes_2'
    const elements = document.querySelectorAll('#duzentos_frases, .botoes_20');
    
    // Itera sobre os elementos selecionados e altera o estilo de display para 'block'
    elements.forEach(element => {
        element.style.display = 'none';
    }); 
}

//===================================================================================

// função avançar
function licao_21() {
    // Seleciona a tabela com o id 'vinte_frases' e a div com a classe 'botoes_2'
    const elements = document.querySelectorAll('#duzentos10_frases, .botoes_21');
    
    // Itera sobre os elementos selecionados e altera o estilo de display para 'block'
    elements.forEach(element => {
        element.style.display = 'block';
    });
}
//==================================================================================
// função voltar
function voltar_21(){

    // Seleciona a tabela com o id 'vinte_frases' e a div com a classe 'botoes_2'
    const elements = document.querySelectorAll('#duzentos10_frases, .botoes_21');
    
    // Itera sobre os elementos selecionados e altera o estilo de display para 'block'
    elements.forEach(element => {
        element.style.display = 'none';
    }); 
}

//===================================================================================

// função avançar
function licao_22() {
    // Seleciona a tabela com o id 'vinte_frases' e a div com a classe 'botoes_2'
    const elements = document.querySelectorAll('#duzentos20_frases, .botoes_22');
    
    // Itera sobre os elementos selecionados e altera o estilo de display para 'block'
    elements.forEach(element => {
        element.style.display = 'block';
    });
}
//==================================================================================
// função voltar
function voltar_22(){

    // Seleciona a tabela com o id 'vinte_frases' e a div com a classe 'botoes_2'
    const elements = document.querySelectorAll('#duzentos20_frases, .botoes_22');
    
    // Itera sobre os elementos selecionados e altera o estilo de display para 'block'
    elements.forEach(element => {
        element.style.display = 'none';
    }); 
}

//==================================================================================

//===================================================================================

// função avançar
function licao_23() {
    // Seleciona a tabela com o id 'vinte_frases' e a div com a classe 'botoes_2'
    const elements = document.querySelectorAll('#duzentos30_frases, .botoes_23');
    
    // Itera sobre os elementos selecionados e altera o estilo de display para 'block'
    elements.forEach(element => {
        element.style.display = 'block';
    });
}
//==================================================================================
// função voltar
function voltar_23(){

    // Seleciona a tabela com o id 'vinte_frases' e a div com a classe 'botoes_2'
    const elements = document.querySelectorAll('#duzentos30_frases, .botoes_23');
    
    // Itera sobre os elementos selecionados e altera o estilo de display para 'block'
    elements.forEach(element => {
        element.style.display = 'none';
    }); 
}

//==================================================================================

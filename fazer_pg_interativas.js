// Função para mostrar a tela escura
function showDarkScreen() {
document.getElementById('tela_estrelas').style.display = 'block';
setTimeout(hideDarkScreen, 1000); // Esconde a tela escura após 5 segundos
}
//----------------------------------------------------------------------------

// Executa o código quando a página for carregada
document.addEventListener("DOMContentLoaded", function () {

    // Seleciona pelo ID e oculta as divs de resposta exercício 1
    document.getElementById("resposta_correta1").style.display = "none";
    document.getElementById("resposta_incorreta1").style.display = "none";
    document.getElementById("resposta_correta2").style.display = "none";
    document.getElementById("resposta_incorreta2").style.display = "none";
    document.getElementById("resposta_correta3").style.display = "none";
    document.getElementById("resposta_incorreta3").style.display = "none";
    //---------------------------------------------------------------------
    // Seleciona pelo ID e oculta as divs de resposta exercício 2
    document.getElementById("resposta_correta4").style.display = "none";
    document.getElementById("resposta_incorreta4").style.display = "none";
    document.getElementById("resposta_correta5").style.display = "none";
    document.getElementById("resposta_incorreta5").style.display = "none";
    document.getElementById("resposta_correta6").style.display = "none";
    document.getElementById("resposta_incorreta6").style.display = "none";
    //---------------------------------------------------------------------
    // Seleciona pelo ID e oculta as divs de resposta exercício 3
    document.getElementById("resposta_correta7").style.display = "none";
    document.getElementById("resposta_incorreta7").style.display = "none";
    document.getElementById("resposta_correta8").style.display = "none";
    document.getElementById("resposta_incorreta8").style.display = "none";
    document.getElementById("resposta_correta9").style.display = "none";
    document.getElementById("resposta_incorreta9").style.display = "none";
    //---------------------------------------------------------------------
    // Seleciona pelo ID e oculta as divs de resposta exercício 4
    document.getElementById("resposta_correta10").style.display = "none";
    document.getElementById("resposta_incorreta10").style.display = "none";
    document.getElementById("resposta_correta11").style.display = "none";
    document.getElementById("resposta_incorreta11").style.display = "none";
    document.getElementById("resposta_correta12").style.display = "none";
    document.getElementById("resposta_incorreta12").style.display = "none";
    //--------------------------------------------------------------------- 
    // Seleciona pelo ID e oculta as divs de resposta exercício 5
    document.getElementById("resposta_correta13").style.display = "none";
    document.getElementById("resposta_incorreta13").style.display = "none";
    document.getElementById("resposta_correta14").style.display = "none";
    document.getElementById("resposta_incorreta14").style.display = "none";
    document.getElementById("resposta_correta15").style.display = "none";
    document.getElementById("resposta_incorreta15").style.display = "none";
    //--------------------------------------------------------------------- 

    // Seleciona pelo ID e oculta as divs de resposta exercício 6
    document.getElementById("resposta_correta16").style.display = "none";
    document.getElementById("resposta_incorreta16").style.display = "none";
    document.getElementById("resposta_correta17").style.display = "none";
    document.getElementById("resposta_incorreta17").style.display = "none";
    document.getElementById("resposta_correta18").style.display = "none";
    document.getElementById("resposta_incorreta18").style.display = "none";
    //--------------------------------------------------------------------- 

    // Seleciona pelo ID e oculta as divs de resposta exercício 7
    document.getElementById("resposta_correta19").style.display = "none";
    document.getElementById("resposta_incorreta19").style.display = "none";
    document.getElementById("resposta_correta20").style.display = "none";
    document.getElementById("resposta_incorreta20").style.display = "none";
    document.getElementById("resposta_correta21").style.display = "none";
    document.getElementById("resposta_incorreta21").style.display = "none";
    //--------------------------------------------------------------------- 

    // Seleciona pelo ID e oculta as divs de resposta exercício 8
    document.getElementById("resposta_correta22").style.display = "none";
    document.getElementById("resposta_incorreta22").style.display = "none";
    document.getElementById("resposta_correta23").style.display = "none";
    document.getElementById("resposta_incorreta23").style.display = "none";
    document.getElementById("resposta_correta24").style.display = "none";
    document.getElementById("resposta_incorreta24").style.display = "none";
    //--------------------------------------------------------------------- 

    // Seleciona pelo ID e oculta as divs de resposta exercício 9
    document.getElementById("resposta_correta25").style.display = "none";
    document.getElementById("resposta_incorreta25").style.display = "none";
    document.getElementById("resposta_correta26").style.display = "none";
    document.getElementById("resposta_incorreta26").style.display = "none";
    document.getElementById("resposta_correta27").style.display = "none";
    document.getElementById("resposta_incorreta27").style.display = "none";
    //--------------------------------------------------------------------- 

    // Seleciona pelo ID e oculta as divs de resposta exercício 9
    document.getElementById("resposta_correta28").style.display = "none";
    document.getElementById("resposta_incorreta28").style.display = "none";
    document.getElementById("resposta_correta29").style.display = "none";
    document.getElementById("resposta_incorreta29").style.display = "none";
    document.getElementById("resposta_correta30").style.display = "none";
    document.getElementById("resposta_incorreta30").style.display = "none";
    //--------------------------------------------------------------------- 


});
//##############################################################################################

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

    // Células do primeiro exercício
    // Seleciona os elementos de resposta
    const id_correta1 = document.getElementById("resposta_correta1");
    const id_incorreta1 = document.getElementById("resposta_incorreta1");
    const id_correta2 = document.getElementById("resposta_correta2");
    const id_incorreta2 = document.getElementById("resposta_incorreta2");
    const id_correta3 = document.getElementById("resposta_correta3");
    const id_incorreta3 = document.getElementById("resposta_incorreta3");
    //--------------------------------------------------------------------
    
    // Células do segundo exercício
    const id_correta4 = document.getElementById("resposta_correta4");
    const id_incorreta4 = document.getElementById("resposta_incorreta4");
    const id_correta5 = document.getElementById("resposta_correta5");
    const id_incorreta5 = document.getElementById("resposta_incorreta5");
    const id_correta6 = document.getElementById("resposta_correta6");
    const id_incorreta6 = document.getElementById("resposta_incorreta6");
    //---------------------------------------------------------------------

    // Células do terceiro exercício
    const id_correta7 = document.getElementById("resposta_correta7");
    const id_incorreta7 = document.getElementById("resposta_incorreta7");
    const id_correta8 = document.getElementById("resposta_correta8");
    const id_incorreta8 = document.getElementById("resposta_incorreta8");
    const id_correta9 = document.getElementById("resposta_correta9");
    const id_incorreta9 = document.getElementById("resposta_incorreta9");
    //---------------------------------------------------------------------

    // Células do quarto exercício
    const id_correta10 = document.getElementById("resposta_correta10");
    const id_incorreta10 = document.getElementById("resposta_incorreta10");
    const id_correta11 = document.getElementById("resposta_correta11");
    const id_incorreta11 = document.getElementById("resposta_incorreta11");
    const id_correta12 = document.getElementById("resposta_correta12");
    const id_incorreta12 = document.getElementById("resposta_incorreta12");
    //---------------------------------------------------------------------

    // Células do quinto exercício
    const id_correta13 = document.getElementById("resposta_correta13");
    const id_incorreta13 = document.getElementById("resposta_incorreta13");
    const id_correta14 = document.getElementById("resposta_correta14");
    const id_incorreta14 = document.getElementById("resposta_incorreta14");
    const id_correta15 = document.getElementById("resposta_correta15");
    const id_incorreta15 = document.getElementById("resposta_incorreta15");
    //---------------------------------------------------------------------

    // Células do sexto exercício
    const id_correta16 = document.getElementById("resposta_correta16");
    const id_incorreta16 = document.getElementById("resposta_incorreta16");
    const id_correta17 = document.getElementById("resposta_correta17");
    const id_incorreta17 = document.getElementById("resposta_incorreta17");
    const id_correta18 = document.getElementById("resposta_correta18");
    const id_incorreta18 = document.getElementById("resposta_incorreta18");
    //---------------------------------------------------------------------

    // Células do sexto exercício
    const id_correta19 = document.getElementById("resposta_correta19");
    const id_incorreta19 = document.getElementById("resposta_incorreta19");
    const id_correta20 = document.getElementById("resposta_correta20");
    const id_incorreta20 = document.getElementById("resposta_incorreta20");
    const id_correta21 = document.getElementById("resposta_correta21");
    const id_incorreta21 = document.getElementById("resposta_incorreta21");
    //---------------------------------------------------------------------

    // Células do sexto exercício
    const id_correta22 = document.getElementById("resposta_correta22");
    const id_incorreta22 = document.getElementById("resposta_incorreta22");
    const id_correta23 = document.getElementById("resposta_correta23");
    const id_incorreta23 = document.getElementById("resposta_incorreta23");
    const id_correta24 = document.getElementById("resposta_correta24");
    const id_incorreta24 = document.getElementById("resposta_incorreta24");
    //---------------------------------------------------------------------

    // Células do sexto exercício
    const id_correta25 = document.getElementById("resposta_correta25");
    const id_incorreta25 = document.getElementById("resposta_incorreta25");
    const id_correta26 = document.getElementById("resposta_correta26");
    const id_incorreta26 = document.getElementById("resposta_incorreta26");
    const id_correta27 = document.getElementById("resposta_correta27");
    const id_incorreta27 = document.getElementById("resposta_incorreta27");
    //---------------------------------------------------------------------

    // Células do sexto exercício
    const id_correta28 = document.getElementById("resposta_correta28");
    const id_incorreta28 = document.getElementById("resposta_incorreta28");
    const id_correta29 = document.getElementById("resposta_correta29");
    const id_incorreta29 = document.getElementById("resposta_incorreta29");
    const id_correta30 = document.getElementById("resposta_correta30");
    const id_incorreta30 = document.getElementById("resposta_incorreta30");
    //---------------------------------------------------------------------

    //*************************************************************************************************
    // Seleciona os inputs 1° exercício
    const escrita1 = document.getElementById("ex1_escrita_1");
    const pronuncia1 = document.getElementById("ex1_pronuncia_1");
    const traducao1 = document.getElementById("ex1_traducao_1");
    //---------------------------------------------------------------------
    // Seleciona os inputs 2° exercício
    const escrita2 = document.getElementById("ex1_escrita_2");
    const pronuncia2 = document.getElementById("ex1_pronuncia_2");
    const traducao2 = document.getElementById("ex1_traducao_2");
    //---------------------------------------------------------------------
    // Seleciona os inputs 3° exercício
    const escrita3 = document.getElementById("ex1_escrita_3");
    const pronuncia3 = document.getElementById("ex1_pronuncia_3");
    const traducao3 = document.getElementById("ex1_traducao_3");
    //---------------------------------------------------------------------
    // Seleciona os inputs 4° exercício
    const escrita4 = document.getElementById("ex1_escrita_4");
    const pronuncia4 = document.getElementById("ex1_pronuncia_4");
    const traducao4 = document.getElementById("ex1_traducao_4");
    //---------------------------------------------------------------------
    // Seleciona os inputs 5° exercício
    const escrita5 = document.getElementById("ex1_escrita_5");
    const pronuncia5 = document.getElementById("ex1_pronuncia_5");
    const traducao5 = document.getElementById("ex1_traducao_5");
    //---------------------------------------------------------------------
    // Seleciona os inputs 6° exercício
    const escrita6 = document.getElementById("ex1_escrita_6");
    const pronuncia6 = document.getElementById("ex1_pronuncia_6");
    const traducao6 = document.getElementById("ex1_traducao_6");
    //---------------------------------------------------------------------
    // Seleciona os inputs 7° exercício
    const escrita7 = document.getElementById("ex1_escrita_7");
    const pronuncia7 = document.getElementById("ex1_pronuncia_7");
    const traducao7 = document.getElementById("ex1_traducao_7");
    //---------------------------------------------------------------------
    // Seleciona os inputs 8° exercício
    const escrita8 = document.getElementById("ex1_escrita_8");
    const pronuncia8 = document.getElementById("ex1_pronuncia_8");
    const traducao8 = document.getElementById("ex1_traducao_8");
    //---------------------------------------------------------------------
    // Seleciona os inputs 9° exercício
    const escrita9 = document.getElementById("ex1_escrita_9");
    const pronuncia9 = document.getElementById("ex1_pronuncia_9");
    const traducao9 = document.getElementById("ex1_traducao_9");
    //---------------------------------------------------------------------
    // Seleciona os inputs 10° exercício
    const escrita10 = document.getElementById("ex1_escrita_10");
    const pronuncia10 = document.getElementById("ex1_pronuncia_10");
    const traducao10 = document.getElementById("ex1_traducao_10");
    //---------------------------------------------------------------------

    //*************************************************************************************************
    // Obtém os valores dos campos de preencher os exercícios
    const Texto_Escrita1 = escrita1.value.trim();
    const Texto_Pronuncia1 = pronuncia1.value.trim();
    const Texto_Traducao1 = traducao1.value.trim();
    //---------------------------------------------------------------------
    // Obtém os valores dos campos de preencher os exercícios
    const Texto_Escrita2 = escrita2.value.trim();
    const Texto_Pronuncia2 = pronuncia2.value.trim();
    const Texto_Traducao2 = traducao2.value.trim();
    //---------------------------------------------------------------------
    // Obtém os valores dos campos de preencher os exercícios
    const Texto_Escrita3 = escrita3.value.trim();
    const Texto_Pronuncia3 = pronuncia3.value.trim();
    const Texto_Traducao3 = traducao3.value.trim();
    //---------------------------------------------------------------------   
    // Obtém os valores dos campos de preencher os exercícios
    const Texto_Escrita4 = escrita4.value.trim();
    const Texto_Pronuncia4 = pronuncia4.value.trim();
    const Texto_Traducao4 = traducao4.value.trim();
    //---------------------------------------------------------------------
    // Obtém os valores dos campos de preencher os exercícios
    const Texto_Escrita5 = escrita5.value.trim();
    const Texto_Pronuncia5 = pronuncia5.value.trim();
    const Texto_Traducao5 = traducao5.value.trim();
    //---------------------------------------------------------------------
    // Obtém os valores dos campos de preencher os exercícios
    const Texto_Escrita6 = escrita6.value.trim();
    const Texto_Pronuncia6 = pronuncia6.value.trim();
    const Texto_Traducao6 = traducao6.value.trim();
    //---------------------------------------------------------------------
    // Obtém os valores dos campos de preencher os exercícios
    const Texto_Escrita7 = escrita7.value.trim();
    const Texto_Pronuncia7 = pronuncia7.value.trim();
    const Texto_Traducao7 = traducao7.value.trim();
    //---------------------------------------------------------------------
    // Obtém os valores dos campos de preencher os exercícios
    const Texto_Escrita8 = escrita8.value.trim();
    const Texto_Pronuncia8 = pronuncia8.value.trim();
    const Texto_Traducao8 = traducao8.value.trim();
    //---------------------------------------------------------------------
    // Obtém os valores dos campos de preencher os exercícios
    const Texto_Escrita9 = escrita9.value.trim();
    const Texto_Pronuncia9 = pronuncia9.value.trim();
    const Texto_Traducao9 = traducao9.value.trim();
    //---------------------------------------------------------------------
    // Obtém os valores dos campos de preencher os exercícios
    const Texto_Escrita10 = escrita10.value.trim();
    const Texto_Pronuncia10 = pronuncia10.value.trim();
    const Texto_Traducao10 = traducao10.value.trim();
    //---------------------------------------------------------------------

    //*************************************************************************************************
    // Verifica a condição para Texto_Escrita1
    if (["I am happy", "i am happy", "I AM HAPPY"].includes(Texto_Escrita1)) {
        id_incorreta1.style.display = "none";
        id_correta1.style.display = "block";
    } else {
        id_correta1.style.display = "none";
        id_incorreta1.style.display = "block";
    }

    // Verifica a condição para Texto_Pronuncia1
    if (["Ai êm répi", "ai êm répi", "AI ÊM RÉPI"].includes(Texto_Pronuncia1)) {
        id_incorreta2.style.display = "none";
        id_correta2.style.display = "block";
    } else {
        id_correta2.style.display = "none";
        id_incorreta2.style.display = "block";
    }

    // Verifica a condição para Texto_Pronuncia1
    if (["Eu estou feliz", "eu estou feliz", "EU ESTOU FELIZ"].includes(Texto_Traducao1)) {
        id_incorreta3.style.display = "none";
        id_correta3.style.display = "block";
    } else {
        id_correta3.style.display = "none";
        id_incorreta3.style.display = "block";
    }
    //-------------------------------------------------------------------------------------------------

    // Verifica a condição para Texto_Escrita1
    if (["She is my friend", "she is my friend", "SHE IS MY FRIEND"].includes(Texto_Escrita2)) {
        id_incorreta4.style.display = "none";
        id_correta4.style.display = "block";
    } else {
        id_correta4.style.display = "none";
        id_incorreta4.style.display = "block";
    }

    // Verifica a condição para Texto_Pronuncia1
    if (["Shí iz mai frênd", "shí iz mai frênd", "SHÍ IZ MAI FRÊND"].includes(Texto_Pronuncia2)) {
        id_incorreta5.style.display = "none";
        id_correta5.style.display = "block";
    } else {
        id_correta5.style.display = "none";
        id_incorreta5.style.display = "block";
    }

    // Verifica a condição para Texto_Pronuncia1
    if (["Ela é minha amiga", "ela é minha amiga", "ELA É MINHA AMIGA"].includes(Texto_Traducao2)) {
        id_incorreta6.style.display = "none";
        id_correta6.style.display = "block";
    } else {
        id_correta6.style.display = "none";
        id_incorreta6.style.display = "block";
    }
    //-------------------------------------------------------------------------------------------------

    // Verifica a condição para Texto_Escrita1
    if (["I will go to the store", "i will go to the store", "I WILL GO TO THE STORE"].includes(Texto_Escrita3)) {
        id_incorreta7.style.display = "none";
        id_correta7.style.display = "block";
    } else {
        id_correta7.style.display = "none";
        id_incorreta7.style.display = "block";
    }

    // Verifica a condição para Texto_Pronuncia1
    if (["Ái wíl gô tu dê stôr", "ái wíl gô tu dê stôr", "ÁI WÍL GÔ TU DÊ STÔR"].includes(Texto_Pronuncia3)) {
        id_incorreta8.style.display = "none";
        id_correta8.style.display = "block";
    } else {
        id_correta8.style.display = "none";
        id_incorreta8.style.display = "block";
    }

    // Verifica a condição para Texto_Pronuncia1
    if (["Eu vou à loja", "eu vou à loja", "EU VOU À LOJA"].includes(Texto_Traducao3)) {
        id_incorreta9.style.display = "none";
        id_correta9.style.display = "block";
    } else {
        id_correta9.style.display = "none";
        id_incorreta9.style.display = "block";
    }
    //-------------------------------------------------------------------------------------------------

    // Verifica a condição para Texto_Escrita1
    if (["We are students", "we are students", "WE ARE STUDENTS"].includes(Texto_Escrita4)) {
        id_incorreta10.style.display = "none";
        id_correta10.style.display = "block";
    } else {
        id_correta10.style.display = "none";
        id_incorreta10.style.display = "block";
    }

    // Verifica a condição para Texto_Pronuncia1
    if (["Wí ar stúdents", "wí ar stúdents", "WÍ AR STÚDENTS"].includes(Texto_Pronuncia4)) {
        id_incorreta11.style.display = "none";
        id_correta11.style.display = "block";
    } else {
        id_correta11.style.display = "none";
        id_incorreta11.style.display = "block";
    }

    // Verifica a condição para Texto_Pronuncia1
    if (["Nós somos estudantes", "nós somos estudantes", "NÓS SOMOS ESTUDANTES"].includes(Texto_Traducao4)) {
        id_incorreta12.style.display = "none";
        id_correta12.style.display = "block";
    } else {
        id_correta12.style.display = "none";
        id_incorreta12.style.display = "block";
    }
    //-------------------------------------------------------------------------------------------------

    // Verifica a condição para Texto_Escrita1
    if (["They are working now", "they are working now", "THEY ARE WORKING NOW"].includes(Texto_Escrita5)) {
        id_incorreta13.style.display = "none";
        id_correta13.style.display = "block";
    } else {
        id_correta13.style.display = "none";
        id_incorreta13.style.display = "block";
    }

    // Verifica a condição para Texto_Pronuncia1
    if (["Dêi ar wêrking náu", "dêi ar wêrking náu", "DÊI AR WÊRKING NÁU"].includes(Texto_Pronuncia5)) {
        id_incorreta14.style.display = "none";
        id_correta14.style.display = "block";
    } else {
        id_correta14.style.display = "none";
        id_incorreta14.style.display = "block";
    }

    // Verifica a condição para Texto_Pronuncia1
    if (["Eles estão trabalhando agora", "eles estão trabalhando agora", "ELES ESTÃO TRABALHANDO AGORA"].includes(Texto_Traducao5)) {
        id_incorreta15.style.display = "none";
        id_correta15.style.display = "block";
    } else {
        id_correta15.style.display = "none";
        id_incorreta15.style.display = "block";
    }
    //-------------------------------------------------------------------------------------------------

        // Verifica a condição para Texto_Escrita1
    if (["It is raining", "it is raining", "IT IS RAINING"].includes(Texto_Escrita6)) {
        id_incorreta16.style.display = "none";
        id_correta16.style.display = "block";
    } else {
        id_correta16.style.display = "none";
        id_incorreta16.style.display = "block";
    }

    // Verifica a condição para Texto_Pronuncia1
    if (["It iz réining", "it iz réining", "IT IZ RÉINING"].includes(Texto_Pronuncia6)) {
        id_incorreta17.style.display = "none";
        id_correta17.style.display = "block";
    } else {
        id_correta17.style.display = "none";
        id_incorreta17.style.display = "block";
    }

    // Verifica a condição para Texto_Pronuncia1
    if (["Está chovendo", "está chovendo", "ESTÁ CHOVENDO"].includes(Texto_Traducao6)) {
        id_incorreta18.style.display = "none";
        id_correta18.style.display = "block";
    } else {
        id_correta18.style.display = "none";
        id_incorreta18.style.display = "block";
    }
    //-------------------------------------------------------------------------------------------------

    // Verifica a condição para Texto_Escrita1
    if (["I don't understand", "i don't understand", "I DON'T UNDERSTAND"].includes(Texto_Escrita7)) {
        id_incorreta19.style.display = "none";
        id_correta19.style.display = "block";
    } else {
        id_correta19.style.display = "none";
        id_incorreta19.style.display = "block";
    }

    // Verifica a condição para Texto_Pronuncia1
    if (["Ái dount anderstênd", "ái dount anderstênd", "ÁI DOUNT ANDERSTÊND"].includes(Texto_Pronuncia7)) {
        id_incorreta20.style.display = "none";
        id_correta20.style.display = "block";
    } else {
        id_correta20.style.display = "none";
        id_incorreta20.style.display = "block";
    }

    // Verifica a condição para Texto_Pronuncia1
    if (["Eu não entendo", "eu não entendo", "EU NÃO ENTENDO"].includes(Texto_Traducao7)) {
        id_incorreta21.style.display = "none";
        id_correta21.style.display = "block";
    } else {
        id_correta21.style.display = "none";
        id_incorreta21.style.display = "block";
    }
    //-------------------------------------------------------------------------------------------------

    // Verifica a condição para Texto_Escrita1
    if (["Can you help me?", "can you help me?", "CAN YOU HELP ME"].includes(Texto_Escrita8)) {
        id_incorreta22.style.display = "none";
        id_correta22.style.display = "block";
    } else {
        id_correta22.style.display = "none";
        id_incorreta22.style.display = "block";
    }

    // Verifica a condição para Texto_Pronuncia1
    if (["Kên iú rélp mí?", "kên iú rélp mí?", "KÊN IÚ RELP MÍ"].includes(Texto_Pronuncia8)) {
        id_incorreta23.style.display = "none";
        id_correta23.style.display = "block";
    } else {
        id_correta23.style.display = "none";
        id_incorreta23.style.display = "block";
    }

    // Verifica a condição para Texto_Pronuncia1
    if (["Você pode me ajudar?", "você pode me ajudar?", "VOCÊ PODE ME AJUDAR?"].includes(Texto_Traducao8)) {
        id_incorreta24.style.display = "none";
        id_correta24.style.display = "block";
    } else {
        id_correta24.style.display = "none";
        id_incorreta24.style.display = "block";
    }
    //-------------------------------------------------------------------------------------------------

    // Verifica a condição para Texto_Escrita1
    if (["What time is it?", "what time is it?", "WHAT TIME IS IT?"].includes(Texto_Escrita9)) {
        id_incorreta25.style.display = "none";
        id_correta25.style.display = "block";
    } else {
        id_correta25.style.display = "none";
        id_incorreta25.style.display = "block";
    }

    // Verifica a condição para Texto_Pronuncia1
    if (["Wót táim iz it?", "wót táim iz it?", "WÓT TÁIM IZ IT?"].includes(Texto_Pronuncia9)) {
        id_incorreta26.style.display = "none";
        id_correta26.style.display = "block";
    } else {
        id_correta26.style.display = "none";
        id_incorreta26.style.display = "block";
    }

    // Verifica a condição para Texto_Pronuncia1
    if (["Que horas são?", "que horas são?", "QUE HORAS SÃO?"].includes(Texto_Traducao9)) {
        id_incorreta27.style.display = "none";
        id_correta27.style.display = "block";
    } else {
        id_correta27.style.display = "none";
        id_incorreta27.style.display = "block";
    }
    //-------------------------------------------------------------------------------------------------

    // Verifica a condição para Texto_Escrita1
    if (["I am hungry", "i am hungry", "I AM HUNGRY"].includes(Texto_Escrita10)) {
        id_incorreta28.style.display = "none";
        id_correta28.style.display = "block";
    } else {
        id_correta28.style.display = "none";
        id_incorreta28.style.display = "block";
    }

    // Verifica a condição para Texto_Pronuncia1
    if (["Ái êm hângri", "ái êm hângri", "ÁI ÊM HÂNGRI"].includes(Texto_Pronuncia10)) {
        id_incorreta29.style.display = "none";
        id_correta29.style.display = "block";
    } else {
        id_correta29.style.display = "none";
        id_incorreta29.style.display = "block";
    }

    // Verifica a condição para Texto_Pronuncia1
    if (["Eu estou com fome", "eu estou com fome", "EU ESTOU COM FOME"].includes(Texto_Traducao10)) {
        id_incorreta30.style.display = "none";
        id_correta30.style.display = "block";
    } else {
        id_correta30.style.display = "none";
        id_incorreta30.style.display = "block";
    }
    //-------------------------------------------------------------------------------------------------


    // Seleciona a tabela com o id 'vinte_frases' e a div com a classe 'botoes_2'
    const elements = document.querySelectorAll('#vinte_frases, .botoes_2');
    // Itera sobre os elementos selecionados e altera o estilo de display para 'block'
    elements.forEach(element => {
        element.style.display = 'block';
    });
    //---------------------------------------------------------------------------------


    // IDs dos elementos que você quer verificar
    const ids = [
        "resposta_correta1", "resposta_correta2", "resposta_correta3",
        "resposta_correta4", "resposta_correta5", "resposta_correta6",
        "resposta_correta7", "resposta_correta8", "resposta_correta9",
        "resposta_correta10", "resposta_correta11", "resposta_correta12",
        "resposta_correta13", "resposta_correta14", "resposta_correta15",
        "resposta_correta16", "resposta_correta17", "resposta_correta18",
        "resposta_correta19", "resposta_correta20", "resposta_correta21",
        "resposta_correta22", "resposta_correta23", "resposta_correta24",
        "resposta_correta25", "resposta_correta26", "resposta_correta27",
        "resposta_correta28", "resposta_correta29", "resposta_correta30"
    ];

    // Verifica se todos os elementos estão visíveis
    const todosVisiveis = ids.every(id => {
        const elemento = document.getElementById(id);
        return getComputedStyle(elemento).display === 'block';
    });

    // Exibe a mensagem se todos os elementos estiverem visíveis
    if (todosVisiveis) {
        alert("Parabéns, você acertou! Agora clique em OK para continuar.");
            // Seleciona a tabela com o id 'vinte_frases' e a div com a classe 'botoes_2'
            const elements = document.querySelectorAll('#vinte_frases, .botoes_2');
            // Itera sobre os elementos selecionados e altera o estilo de display para 'block'
            elements.forEach(element => {
                element.style.display = 'block';
            });
        //---------------------------------------------------------------------------------
    } else {
        alert("Você ainda não acertou todas as respostas. Tente novamente.");
                // Seleciona a tabela com o id 'vinte_frases' e a div com a classe 'botoes_2'
                const elements = document.querySelectorAll('#vinte_frases, .botoes_2');
                // Itera sobre os elementos selecionados e altera o estilo de display para 'block'
                elements.forEach(element => {
                    element.style.display = 'none';
                });
    }



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


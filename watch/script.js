
// MOBILE

document.addEventListener('DOMContentLoaded', function() {
    // Adiciona o evento de clique no botão de menu móvel
    document.getElementById('mobile_btn').addEventListener('click', function() {
        // Seleciona o menu móvel
        const mobileMenu = document.getElementById('mobile_menu');
        // Seleciona o ícone de barras (menu)
        const menuIcon = document.querySelector('#mobile_btn i');

        // Alterna a visibilidade do menu (abre/fecha)
        mobileMenu.classList.toggle('show');

        // Verifica se o menu está visível para mudar o ícone
        if (mobileMenu.classList.contains('show')) {
            menuIcon.classList.remove('fa-bars'); // Remove o ícone de menu (barras)
            menuIcon.classList.add('fa-times'); // Adiciona o ícone de fechar (X)
        } else {
            menuIcon.classList.remove('fa-times'); // Remove o ícone de fechar (X)
            menuIcon.classList.add('fa-bars'); // Adiciona o ícone de menu (barras)
        }
    });
});

// ALTERAÇÃO DAS IMAGENS 

window.onload = function() {
    var mainimg = document.getElementById('watch'); // A imagem principal
    var smallimg = document.getElementsByClassName('itens'); // As miniaturas

    // Verifique se os elementos pequenos existem antes de configurar os eventos
    if (smallimg.length > 0) {
        // Iterar sobre cada imagem pequena e adicionar o evento de clique
        for (let i = 0; i < smallimg.length; i++) {
            smallimg[i].onclick = function() {
                console.log("Imagem " + i + " foi clicada");
                mainimg.src = smallimg[i].src; // Alterar o src da imagem principal
            }
        }
    } else {
        console.log("Nenhuma imagem pequena foi encontrada");
    }
};

// ALTERAÇÃO DE CORES CONFORME ESCOLHA

window.onload = function() {
    var mainimg = document.getElementById('watch'); 
    var smallimg = document.getElementsByClassName('itens');

    var images = {
        blue: {
            main: "/watch/imagens/opcoes-cores/imagens-azul-inverno/1.png",
            thumbnails: [
                "/watch/imagens/opcoes-cores/imagens-azul-inverno/1.png",
                "/watch/imagens/opcoes-cores/imagens-azul-inverno/0.png",
                "/watch/imagens/opcoes-cores/imagens-azul-inverno/2.png",
            ]
        },
        estelar: {
            main: "/watch/imagens/opcoes-cores/imagens-estelar/1.png",
            thumbnails: [
                "/watch/imagens/opcoes-cores/imagens-estelar/1.png",
                "/watch/imagens/opcoes-cores/imagens-estelar/0.png",
                "/watch/imagens/opcoes-cores/imagens-estelar/2.png",
            ]
        },
        noite: {
            main: "/watch/imagens/opcoes-cores/imagens-meia-noite/1.png",
            thumbnails: [
                "/watch/imagens/opcoes-cores/imagens-meia-noite/1.png",
                "/watch/imagens/opcoes-cores/imagens-meia-noite/0.png",
                "/watch/imagens/opcoes-cores/imagens-meia-noite/2.png"
            ]
        },
        pink: {
            main: "/watch/imagens/opcoes-cores/imagens-rosa-claro/1.png",
            thumbnails: [
                "/watch/imagens/opcoes-cores/imagens-rosa-claro/1.png",
                "/watch/imagens/opcoes-cores/imagens-rosa-claro/0.png",
                "/watch/imagens/opcoes-cores/imagens-rosa-claro/2.png"
            ]
        },
        verde: {
            main: "/watch/imagens/opcoes-cores/imagens-verde-cipreste/1.png",
            thumbnails: [
                "/watch/imagens/opcoes-cores/imagens-verde-cipreste/1.png",
                "/watch/imagens/opcoes-cores/imagens-verde-cipreste/0.png",
                "/watch/imagens/opcoes-cores/imagens-verde-cipreste/2.png",
            ]
        }
    };

    // Função para atualizar a imagem principal e miniaturas
    function updateImages(color) {
        mainimg.src = images[color].main;

        // Atualizar miniaturas
        for (let i = 0; i < smallimg.length; i++) {
            smallimg[i].src = images[color].thumbnails[i];
        }
    }

    // Adicionar eventos de clique para cada cor
    document.getElementById('blue').onclick = function() { updateImages('blue'); };
    document.getElementById('estelar').onclick = function() { updateImages('estelar'); };
    document.getElementById('noite').onclick = function() { updateImages('noite'); };
    document.getElementById('pink').onclick = function() { updateImages('pink'); };
    document.getElementById('verde').onclick = function() { updateImages('verde'); };

    // Evento para alterar a imagem principal ao clicar nas miniaturas
    for (let i = 0; i < smallimg.length; i++) {
        smallimg[i].onclick = function() {
            mainimg.src = smallimg[i].src; // Alterar o src da imagem principal
        }
    }
};


  

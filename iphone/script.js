function imgSlider(e){
    document.querySelector('#Phone').src = e;
}

function circlecor(color){
    const circle = document.querySelector('.circle');
    circle.style.background = color;
}


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



// Botão voltar ao topo
let topButton = document.getElementById("topBtn");

// Quando o usuário rolar para baixo 300px, mostrar o botão
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
}

// Ao clicar no botão, rolar para o topo suavemente
topButton.addEventListener("click", function() {
    window.scrollTo({top: 0, behavior: 'smooth'});
});

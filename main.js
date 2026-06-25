function abrirMenu(){
    const menu = document.getElementById("menu");
    const botao = document.querySelector(".botao-menu");
    menu.classList.toggle("ativo");
    if (menu.classList.contains("ativo")) {
        botao.textContent = "X";
    } else {
        botao.textContent = "=";
    }
    
}
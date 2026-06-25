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
const botaoVoltarTopo = document.getElementById("botaoVoltarTopo");

window.addEventListener("scroll", function () {
    if (window.scrollY > 200) {
        botaoVoltarTopo.classList.add("aparecer");
    } else {
        botaoVoltarTopo.classList.remove("aparecer");
    }
});

function voltarAoTopo(){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
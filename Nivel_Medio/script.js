const luzes = {
    vermelho: document.querySelector(".vermelho"),
    amarelo: document.querySelector(".amarelo"),
    verde: document.querySelector(".verde"),
};

let contador = 0

const resetarLuzes = () => {
    luzes.vermelho.classList.remove('Vermelho-ligado');
    luzes.amarelo.classList.remove('Amarelo-ligado');
    luzes.verde.classList.remove('Verde-ligado');
};

const ativarLuz = () => {
    resetarLuzes(); 

    if (contador === 0) {
        luzes.vermelho.classList.add('Vermelho-ligado');
    } else if (contador === 5) {
        luzes.amarelo.classList.add('Amarelo-ligado');
    } else if (contador === 10) {
        luzes.verde.classList.add('Verde-ligado');
    }
};

setInterval(() => {
    ativarLuz();

    // quando o contador chega em 15 comeca dnvo
    contador = (contador + 1) % 15;
}, 1000);
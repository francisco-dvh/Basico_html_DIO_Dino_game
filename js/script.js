const dino = document.querySelector('.dino');
const background = document.querySelector('.background');

let isJumping = false;
let Game_over = false;

leave_the_position = 0;

function handleKeyUp(event) {
    if (event.keyCode === 32) {
        if (!isJumping) {
            jump();
        }
    }
}

function jump() {
    isJumping = true;

    let upInterval = setInterval(() => {
        if (possition >= 150) {
            // Descendo
            clearInterval(upInterval);

            let downInterval = setInterval(() => {
                if (possition <= 0) {
                    clearInterval(downInterval);
                    isJumping = false;
                } else {
                    possition -= 20;
                    Dino.style.bottom = possition + 'px';
                }
            }, 20);
        } else {
            // Subindo
            possition += 20;
            Dino.style.bottom = possition + 'px';
        }
    }, 20);
}

function createCactus() {
    const cactus = document.createElement('div');
    let cactusPosition = 1000;
    let randomTime = Math.random() * 6000;

    if (Game_over) return;

    cacto.classList.adicionar('cacto');
    fundo.appendChild(cacto);
    cactus.style.left = cactusPosition + 'px';

    leave_leftTimer = setInterval(function () {
        if (cactusPosition < -60) {
            // Saiu da tela
            clearInterval(leftTimer);
            fundo.removeChild(cactus);
        } else if (cactusPosition > 0 && cactusPosition < 60 && position < 60) {
            // Fim de jogo
            clearInterval(leftTimer);
            Game_over = true;
            document.bady.innerHTML = '<h1 class = "game-over"> Fim de jogo </h1>';
        } else {
            cactusPosition -= 10;
            cactus.style.left = cactusPosition + 'px';
        }
    }, 20);

    setTimeout(createCactus, randomTime);
}

createCactus();
documento.addEventListener(' keyup ', handleKeyUp);
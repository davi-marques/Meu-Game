// Objetos do jogo
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

Width = canvas.width = 700; // 700
Height = canvas.height = 550; // 550

let margem = (window.innerHeight - Height) / 2;
canvas.style.marginTop = `${margem}px`;
// Movimentação
window.addEventListener('keydown', keysDown, false);
window.addEventListener('keyup', keysUp, false);
function keysDown(e) {
    let key = e.keyCode;
    switch (key) {
        case 65: // <-
            left = true;
            right = false;
        break;
        case 37: // <-
            left = true;
            right = false;
        break;

        case 68: // ->
            left = false;
            right = true;
        break;
        case 39: // ->
            left = false;
            right = true;
        break;
    }
}
function keysUp(e) {
    let key = e.keyCode;
    switch (key) {
        case 65: // <-
            left = false;
        break;
        case 37: // <-
            left = false;
        break;

        case 68: // ->
            right = false;
        break;
        case 39: // ->
            right = false;
        break;
    }
}

function move() {
    if (left) {
        man.posX -= speed;
    }
    if (right) {
        man.posX += speed;
    }

    man.posX = Math.max(70, Math.min(Width - 165, man.posX));
    man.posY = Math.max(70, Math.min(Height - 165, man.posY));
}
//
function animation() {
    if(left){
        man.srcY = 48;
    } else if(right){
        man.srcY = 0;
    }

    if(right || left){
        // Se movendo
        countP = 0;
        count++;
        if(count >= 40){
            count = 6;
        }
        man.srcX = Math.floor(count / 5) * man.width;
    } else {
        // Parado
        count = 6;
        countP++;
        if (countP >= 60) {
            countP = 0;
        }
        man.srcX = Math.floor(countP / 30) * man.width;
    }
}

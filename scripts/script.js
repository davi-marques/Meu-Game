// Objetos do jogo
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');


let margem = (window.innerHeight - Height) / 2;
canvas.style.marginTop = `${margem}px`;

let blocks = [];

let left = right = false,
count = 0,
countP = 0,
pulos = 0,
Gravity = 1.5;

// Estado do jogo
const state = {
    jogando: 'jogando',
    perdeu: 'perdeu',
    ganhou: 'ganhou'
}
let estadoAtual = state.jogando;


// Imagens
const bg = new Image();
bg.src = 'images/scene.png';

const manImg = new Image();
manImg.src = 'images/man.png';

const border = new Image();
border.src = 'images/border.png';

// Propiedades do personagem
class Man {
    constructor() {
        this.pos = {
            x: 1230,
            y: 120, // 488
        }
        this.srcX = 0;
        this.srcY = 72;

        this.width = 72;
        this.height = 72;

        this.posIni = {
            x: 1230,
            y: 120,
        }

        this.speed = {
            x: 0,
            y: 1,
        }
    }

    draw() {
        ctx.drawImage(manImg, this.srcX, this.srcY, this.width, this.height, this.pos.x, this.pos.y, this.width, this.height);
    }

    gravity() {
        this.pos.y += this.speed.y;
        this.pos.x += this.speed.x;
        
        if (this.pos.y + this.height <= Height+42) {
            this.pos.y = Math.max(0, Math.min(Height+42 - this.height - this.speed.y, this.pos.y));
            this.speed.y += Gravity;

            if (this.pos.y == 0) {
                this.speed.y = 0;
                this.speed.y += Gravity;
            }
        } else {  // Ele caiu!
            this.speed.y = 0;
            this.speed.x = 0;
            this.pos.x = this.speed.x;
            pulos = 21;
            estadoAtual = state.perdeu;
        }
        this.pos.x = Math.max(34, Math.min(Width - 106, this.pos.x));
    }
}
const man = new Man();


// Funções

// Movimentação
function move() {
    if (right) {
        man.speed.x = 5;
    } else if (left) {
        man.speed.x = -5;
    } else {
        man.speed.x = 0;
    }
}



// Animação

function animation() {
    if(left){
        man.srcY = 72;
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



// Desenha

function render() {
    ctx.clearRect(0, 0, Width, Height);
    ctx.drawImage(bg, 0, 0, Width, Height);
    man.draw();
    ctx.drawImage(border, 0, 0, Width, Height);
    ctx.imageSmoothingEnabled = false;

    // Desenha os blocos
    for(let i in blocks) {
        let blk = blocks[i];

        if (blk.visible) {
            ctx.fillStyle = blk.color;
            ctx.fillRect(blk.pos.x, blk.pos.y, blk.width, blk.height);
        }

        blk.solid();
    }
}



// Fluxo do jogo

(function update() {
    window.requestAnimationFrame(update, canvas);
    render();
    move();
    animation();
    man.gravity();

    if (estadoAtual == state.perdeu) {
        ctx.fillStyle = 'rgba(0, 0, 10, 0.40)'
        ctx.fillRect(0, 0, Width, Height);

        // Escrevena tela que morreu
        ctx.fillStyle = '#fff'
        ctx.font = "35px 'Press Start 2P', Arial";
        ctx.fillText('Você morreu!', Width/2-200, Height/2-170);
        
        ctx.font = "25px 'Press Start 2P', Arial";
        ctx.fillText('pres. Enter para reiniciar', Width/2-250, Height/2-30)
    }
}());



// Teclas
window.addEventListener('keydown', ( {key} ) => {
    // console.log(key);
    switch (key) {
        case 'a':
            left = true;
            right = false;
            break;
        case 'ArrowLeft':
            left = true;
            right = false;
            break;
        case 'd':
            left = false;
            right = true;
            break;
        case 'ArrowRight':
            left = false;
            right = true;
            break;
        case ' ':
            pulos += 20
            if (pulos <= 20) {
                man.speed.y -= 22.5;
            }

            // if (pulos == 30) {
            //     man.speed.y += 5;
            // }
            break;
        case 'Enter':
            if (estadoAtual == state.perdeu) {
                estadoAtual = state.jogando;
                man.srcY = 72;
                man.pos.y = 120;
                man.pos.x = 1230;
            }
            break;
    }
}, false);

window.addEventListener('keyup', ( {key} ) => {
    switch (key) {
        case 'a':
            left = false;
            break;
        case 'ArrowLeft':
            left = false;
            break;
        case 'd':
            right = false;
            break;
        case 'ArrowRight':
            right = false;
            break;
        case ' ':
            if (pulos < 21) {
                pulos -= 10
                man.speed.y += Gravity;
            }
        break;
    }
}, false);
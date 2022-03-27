// Objetos do jogo
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');


let margem = (window.innerHeight - Height) / 2;
canvas.style.marginTop = `${margem}px`;

let blocks = [];

let left = right = false;

    }
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
            pulos = 21
            death = true;
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
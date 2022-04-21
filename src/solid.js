class Block {
    constructor(posx, posy, width, height, color, bar) {
        this.pos = {
            x: posx,
            y: posy
        }
        this.width = width;
        this.height = height;
        this.color = color;
        this.visible = false;
        this.bar = bar;
    }

    solid() {
        if (man.pos.y + man.height + man.speed.y >= this.pos.y && // Cima
             man.pos.y + man.height + man.speed.y <= this.pos.y + this.height && // Baixo
             man.pos.x+21 <= this.pos.x + this.width && // Direita
             man.pos.x + man.width-21 >= this.pos.x) { // Esquerda

            man.speed.y = 0;                     // Para em cima do plataforma
            man.pos.y = this.pos.y - man.height     // Aterisagem
            pulos = 0;                           // Zera o contador de pulos para pular mais vezes
        }
    }

    barreira() {
    if (man.pos.x <= this.pos.x + this.width && man.pos.x + man.width >= this.pos.x) { 
        if (man.pos.y + man.height > this.pos.y && man.pos.y <= this.pos.y + this.height) {
            man.pos.x = Math.max(this.pos.x+this.width, Math.min(this.pos.x, man.pos.x));
        } else if (man.pos.y + man.height == this.pos.y) {
            man.pos.y = this.pos.y - man.height
        }
    }
}
}

// man.


class Blocks {
    constructor(posX, posY, width, height, color) {
        this.posX = posX;
        this.posY = posY;
        this.width = width;
        this.height = height;
        this.color = color;
        this.visible = false; //
    }
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
}



//         man.speed.y = 0;

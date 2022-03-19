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


// Bloco solido

function blockSolid(r1, r2){
    // r1 = personagem   r2 = bloco

    // Catetos
    let catX = (r1.posX + r1.width / 2) - (r2.posX + (r2.width / 2)-13);
    let catY = (r1.posY + r1.height / 2) - (r2.posY + r2.height / 2);

    // Soma das metades
    let sumHalfWidth = (r1.width / 2) + (r2.width / 2);
    let sumHalfHeight = (r1.height / 2) + (r2.height / 2);

    if (Math.abs(catX) < sumHalfWidth && Math.abs(catY) < sumHalfHeight) {
        let overlapX = sumHalfWidth - Math.abs(catX);
        let overlapY = sumHalfWidth - Math.abs(catY);

        if(overlapX >= overlapY) {
            if(catY > 0) {
                r1.posY += overlapY;
            } else {
                r1.posY -= overlapY;
            }
        } else {
            if (catX > 0) {
                r1.posX += overlapX;
            } else {
                r1.posX -= overlapX;
            }
        }
    }
}
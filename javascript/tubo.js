class Tubo {
    // Propiedades de los tubos:
        constructor(yPos, isTuboImageUp) {
            this.x = canvas.width; // posicion de eje x
            this.y = yPos; // posicion de eje y
            this.w = 60; // witdth = ancho
            this.h = 300; // height = altura
            this.speed = 2;
            this.image = new Image();
            if (isTuboImageUp) {
                this.image.src = "./images/obstacle_top.png"
            } else {
                this.image.src = "./images/obstacle_bottom.png"
            }
    }
    // Metodos:
        // Dibujar el tubo
        drawTubo = () => {
            ctx.drawImage(this.image, this.x, this.y, this.w, this.h);
        }
        // Que los tubos avancen
        moveTubo = () => {
            this.x -= this.speed;
        }
}
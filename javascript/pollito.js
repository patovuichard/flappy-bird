class Pollito {
    // Propiedades del pollito
    constructor() {
        this.x = 50; // posicion de eje x
        this.y = 50; // posicion de eje y
        this.w = 45; // witdth = ancho
        this.h = 40; // height = altura
        this.speed = 2;
        this.jumpSpeed = 40;
        this.image = new Image();
        this.image.src = "./images/flappy.png"
    }

    // Metodos
        // Que el pollito baje (efecto gravedad)
        // Que el pollito suba

    drawPollito = () => {
        ctx.drawImage(this.image, this.x, this.y, this.w, this.h);
    }

    gravityPollito = () => {
        this.y += this.speed;
    }

    jumpPollito = () => {
        this.y -= this.jumpSpeed;
    }
}
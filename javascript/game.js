class Game {
    // Propiedades
    constructor() {
        this.bg = new Image();
        this.bg.src = "./images/bg.png"

        this.pollito;
        this.tubos;

        // Que los tubos avancen
        // Que el pollito baje (efecto gravedad)
        // Que el pollito suba
        // Propiedades de los tubos
        // Propiedades del pollito
        // Colisiones del pollito con los tubos
        // colision del pollito con el suelo
        // Que los tubos aparezcan/desaparezcan
        // GameOver => enviar a la pantalla final

        // BONUS:
        // * Puntuacion
        // * Vidas => sistema de respawn
        // * Dificultad
        // * Cambio de direccion del pollito => cambio de imagen
    }

    // Metodos

    gameLoop = () => {
        // 1. Limpiar el canvas

        // 2. Movimientos y acciones de todos los elementos

        // 3. Dibujado de los elementos
        ctx.drawImage(this.bg, 0, 0, canvas.width, canvas.height);
        

        // 4. Recursion y control
        requestAnimationFrame(this.gameLoop)
    }
}
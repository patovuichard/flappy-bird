class Game {
    // Propiedades
    constructor() {
        this.bg = new Image();
        this.bg.src = "./images/bg.png"

        this.pollito = new Pollito();
        // this.tuboTest = new Tubo();
        this.tubosArr = [];
        this.frames = 1; // determina la cant de frames que pasaron en el juego
        
        this.tubeSeparation = 130;

        this.isGameOn = true;
        this.isGameover = false;

        // Boton de pausa del juego
        
        // BONUS:
        // * Puntuacion
        // * Vidas => sistema de respawn
        // * Dificultad
        // * Cambio de direccion del pollito => cambio de imagen del pollito
        // * Animacion de alas del pollito => rotacion de imagenes del pollito
    }
    
    // Metodos:


        // Colision del pollito con el suelo
    checkColisionPollitoSuelo = () => {
        if (this.pollito.y + this.pollito.h > canvas.height || this.pollito.y + this.pollito.h < 0 ) {
            this.gameOver()
        }
    }
    
        // GameOver => enviar a la pantalla final
    gameOver = () => {
        // 1. Detener la recursion
        this.isGameOn = false;
        this.isGameover = true;
        // 2. Ocultar el canvas
        canvas.style.display = "none";
        // 3. Mostrar la pantalla final
        gameoverScreenDOM.style.display  = "flex";
    }
    
        // Colisiones del pollito con los tubos
    checkColisionPollitoTubo= () => {
        this.tubosArr.forEach ((eachTubo)=> {
            if (
                eachTubo.x < this.pollito.x + this.pollito.w &&
                eachTubo.x + eachTubo.w > this.pollito.x &&
                eachTubo.y < this.pollito.y + this.pollito.h &&
                eachTubo.h + eachTubo.y > this.pollito.y
              ) {
                this.gameOver();
                // Collision detected!
                
              }
        })
    }
        // Dibujar fondo
    drawBg = () => {
        ctx.drawImage(this.bg, 0, 0, canvas.width, canvas.height);
    }

        // Borrar el canvas
    clearCanvas = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
    }

    // Que los tubos aparezcan/desaparezcan
    tubosAparecen = () => {
        if (this.tubosArr.length === 0 || this.frames % 120 === 0) {
            let randomPosY = Math.random() * (-200)
            
            let tuboDeArriba = new Tubo(randomPosY, true);
            this.tubosArr.push(tuboDeArriba);

            let tuboDeAbajo = new Tubo(randomPosY + tuboDeArriba.h + this.tubeSeparation, false);
            this.tubosArr.push(tuboDeAbajo);
        }
    }

    tubosDesaparecen = () => {
        if (this.tubosArr[0].x + this.tubosArr[0].w < 0) {
            this.tubosArr.shift();
        }
    }


    gameLoop = () => {
        // console.log(this.frames)
        this.frames++

        // 1. Limpiar el canvas
        this.clearCanvas();
        
        // 2. Movimientos y acciones de todos los elementos
        this.pollito.gravityPollito();
        
        // Agrego y elimino tubos al array
        this.tubosAparecen();
        this.tubosDesaparecen();

        // Chequeo de colisiones
        this.checkColisionPollitoTubo();
        this.checkColisionPollitoSuelo();

        // Movimiento de los tubos
        this.tubosArr.forEach ((eachTubo) => {
            eachTubo.moveTubo();
        })

        // 3. Dibujado de los elementos
        this.drawBg();
        this.pollito.drawPollito();
        // this.tuboTest.drawTubo();

        // Quiero dibujar todos los tubos del array
        this.tubosArr.forEach ((eachTubo) => {
            eachTubo.drawTubo()
        })

        // 4. Recursion y control
        if (this.isGameOn === true) {
            requestAnimationFrame(this.gameLoop)
        }
    }
}
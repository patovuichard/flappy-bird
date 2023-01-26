// * GLOBAL VARIABLES
const startBtnDOM = document.querySelector("#start-btn")
const canvas = document.querySelector("#my-canvas")
const startScreenDOM = document.querySelector("#splash-screen")
const restartGameDOM = document.querySelector("#restart-btn");
const pauseGameDOM = document.querySelector("#pause-btn")
const gameoverScreenDOM = document.querySelector("#gameover-screen")
const ctx = canvas.getContext("2d");
let game;


// * STATE MANAGEMENT FUNCTIONS
const startGame = () => {
    // 1. cambiar la pantalla
    startScreenDOM.style.display = "none";  //hago "invisible" la pantalla de start
    canvas.style.display = "block"          //hago "visible" la pantalla del juego

    // 2. Crear un objeto de la clase Game
    game = new Game()
    

    // 3. Iniciar el juego (gameLoop)
    game.gameLoop()
}

const handleJumpPollito = (event) => {
    if (event.code === "Space") {
        game.pollito.jumpPollito();
    }
}


// * ADD EVENT LISTENERS
startBtnDOM.addEventListener("click", startGame)
window.addEventListener("keydown", handleJumpPollito)
restartGameDOM.addEventListener("click", () => {
    if (game.isGameover === true) {
        game.isGameover = false;
        game.isGameOn = false;
        startGame();
    }
})
pauseGameDOM.addEventListener("click", () => {
    if (game.isGameOn === true) {
        game.isGameOn = false;
    } else {
        game.isGameOn = true;
        game.gameLoop();
    }
})




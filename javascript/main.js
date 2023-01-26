// * GLOBAL VARIABLES
const startBtnDOM = document.querySelector("#start-btn")
const canvas = document.querySelector("#my-canvas")
const startScreenDOM = document.querySelector("#splash-screen")
const ctx = canvas.getContext("2d");



// * STATE MANAGEMENT FUNCTIONS
const startGame = () => {
    // 1. cambiar la pantalla
    startScreenDOM.style.display = "none";  //hago "invisible" la pantalla de start
    canvas.style.display = "block"          //hago "visible" la pantalla del juego

    // 2. Crear un objeto de la clase Game
    const game = new Game()

    // 3. Iniciar el jeugp (gameLoop)
    game.gameLoop()
}





// * ADD EVENT LISTENERS
startBtnDOM.addEventListener("click", startGame)





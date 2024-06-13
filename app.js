console.log("Welcome to Tic Tac Toe")

let music = new Audio("music.mp3")
let gamewin = new Audio("gamewin.mp3")
let gameover = new Audio("gameover.mp3")
let newturn = new Audio("changeturn.mp3")
let turn = "X"

// function to change turn

const changeTurn = () => {
   return turn === "X" ? "0" : "X"
}

// function to check for Win

const checkWin = () => {

}

// game logic

let boxes = document.getElementsByClassName("box")
Array.from(boxes).forEach(element => {
    let boxText = element.querySelector('.boxText')
    element.addEventListener('click', () => {
        if (boxText.innerText === '') {
            boxText.innerText = turn
            changeTurn();
            newturn.play()
            checkWin();
            document.getElementsByClassName("info")[0].innerText = "Turn for " + turn
        }
    })
})


























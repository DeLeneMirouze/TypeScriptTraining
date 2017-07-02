/// <reference path="player.ts"/>
/// <reference path="game.ts"/>

let newGame:Game;

// add click handler to the start game button
document.getElementById('startGame')!.addEventListener('click', () => {
    let player: Player = new Player();
    player.name = utility.getInputValue('playername');

    let problemCount: number = Number(utility.getInputValue('problemCount'));
    let factor: number = Number(utility.getInputValue('factor'));

    newGame = new Game(player, problemCount, factor);
    newGame.displayGame();
});

// add click handler to the calculate score button
document.getElementById('calculate')!.addEventListener('click', () => {
    newGame.calculateScore();
});


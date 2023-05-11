/// <reference path="player.ts"/>

function startGame(){

    let playerName: string | undefined = getInputValue('playername');
    logPlayer(playerName);

    var messagesElement: HTMLElement | string | null;

    postScore(100, playerName);
    postScore(-5, playerName);





}

function logPlayer(name: string = "MultiMath Player"): void {
    console.log(`New game starting for player: ${name}`);
}



function postScore(score: number, playerName: string = "MultiMath Player"): void {

    let logger: (value: string) => void;

    if(score < 0){
        logger = logError;
    }else{
        logger = logMessage;
    }


    const scoreElement: HTMLElement | null = document.getElementById('postedScores');
    scoreElement!.innerText = `${score} - ${playerName}`;

    logger(`Score: ${score}`);
}

const logMessage = (message: string) => console.log(message);

function logError(err: string): void{
    console.error(err);
} 

const firstPlayer: Player = new Player();
firstPlayer.name = "Lanier";
console.log(firstPlayer.formatName());

document.getElementById('startGame')!.addEventListener('click', startGame);
//# sourceMappingURL=app.js.map
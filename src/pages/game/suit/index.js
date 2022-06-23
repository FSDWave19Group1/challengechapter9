/* eslint-disable eqeqeq */
import React from "react";
import "../../../assets/css/game_suit.css";

export default function GameSuit() {
  function ActiveStateRemoval() {
    const allChoices = document.querySelectorAll(".choice");
    allChoices.forEach((choice) => {
      if (choice.classList.contains("active")) {
        choice.classList.remove("active");
      }
    });
  }

  function MakeChoiceUnclickable(animationTime) {
    const allChoices = document.querySelectorAll(".choice");
    allChoices.forEach((choice) => {
      choice.style.pointerEvents = "none";
    });
    setTimeout((fungsi) => {
      allChoices.forEach((choice) => {
        choice.style.pointerEvents = "auto";
      });
    }, animationTime);
  }

  //generate random number between 1, 2, and 3 then designate every number for the bot's choice
  function botChoiceGenerator(choiceArray) {
    choiceArray.push(Math.floor(Math.random() * 3) + 1);
    switch (choiceArray) {
      case 1:
        choiceArray.push(".bot.batu");
        console.log("COM chooses ROCK!");
        break;
      case 2:
        choiceArray.push(".bot.gunting");
        console.log("COM chooses SCISSORS!");
        break;
      default:
        choiceArray.push(".bot.kertas");
        console.log("COM chooses PAPER!");
        break;
    }
    document.querySelector(choiceArray[1]).classList.add("active");
    return choiceArray;
  }

  //showing .player-win div in center and hide the others
  function PlayerWin() {
    const versusText = document.querySelector(".versus-text");
    const playerWin = document.querySelector(".player-win");
    const botWin = document.querySelector(".bot-win");
    const draw = document.querySelector(".draw");
    console.log("PLAYER 1 WIN! GOOD JOB!");
    versusText.style.display = "none";
    botWin.style.display = "none";
    draw.style.display = "none";
    playerWin.style.display = "block";
    console.log("---------------ROUND END---------------");
  }

  //showing .bot-win div in center and hide the others
  function BotWin() {
    const versusText = document.querySelector(".versus-text");
    const playerWin = document.querySelector(".player-win");
    const botWin = document.querySelector(".bot-win");
    const draw = document.querySelector(".draw");
    console.log("Unfortunately, COM WIN!");
    versusText.style.display = "none";
    botWin.style.display = "block";
    draw.style.display = "none";
    playerWin.style.display = "none";
    console.log("---------------ROUND END---------------");
  }

  //showing .draw div in center and hide the others
  function Draw() {
    const versusText = document.querySelector(".versus-text");
    const playerWin = document.querySelector(".player-win");
    const botWin = document.querySelector(".bot-win");
    const draw = document.querySelector(".draw");
    console.log("Whoops! It's a DRAW!");
    versusText.style.display = "none";
    botWin.style.display = "none";
    draw.style.display = "block";
    playerWin.style.display = "none";
    console.log("---------------ROUND END---------------");
  }

  function VersusReset() {
    const versusText = document.querySelector(".versus-text");
    const playerWin = document.querySelector(".player-win");
    const botWin = document.querySelector(".bot-win");
    const draw = document.querySelector(".draw");
    versusText.style.display = "block";
    botWin.style.display = "none";
    draw.style.display = "none";
    playerWin.style.display = "none";
  }

  function GameResult(P1Choice, randomNumber) {
    if (
      (P1Choice == 1 && randomNumber == 2) ||
      (P1Choice == 2 && randomNumber == 3) ||
      (P1Choice == 3 && randomNumber == 1)
    )
      PlayerWin();
    else if (P1Choice == randomNumber) Draw();
    else BotWin();
  }

  function RandomChoiceAnimation() {
    const botChoices = document.querySelectorAll(".bot");
    let queueList = 0;
    const start = new Date().getTime();
    setInterval((fungsi) => {
      if (new Date().getTime() - start >= 1200) {
        clearInterval();
        return;
      }
      if (queueList == botChoices.length) {
        return (queueList = 0);
      }
      botChoices[queueList].classList.add("active");
      setTimeout((fungsi) => {
        botChoices[queueList++].classList.remove("active");
      }, 80);
    }, 100);
  }

  function playBatu() {
    let choiceArray = [];
    MakeChoiceUnclickable(1200);
    ActiveStateRemoval(); //reset
    let P1Choice = 1;
    console.log("YOU choose ROCK!");
    document.querySelector(".player.batu").classList.add("active"); //highlight the player's choice
    RandomChoiceAnimation();
    setTimeout((fungsi) => {
      botChoiceGenerator(choiceArray); //generate bot's choice
      GameResult(P1Choice, choiceArray[0]); //determine the winner
    }, 1200); //because RandomChoiceAnimation uses setInterval, the remaining function must be contained in the setTimeout
  }

  // only run when player choose scissors
  function playGunting() {
    let choiceArray = [];
    MakeChoiceUnclickable(1200);
    ActiveStateRemoval(); //reset
    let P1Choice = 2;
    console.log("YOU choose SCISSORS!");
    document.querySelector(".player.gunting").classList.add("active"); //highlight the player's choice
    RandomChoiceAnimation();
    setTimeout((fungsi) => {
      botChoiceGenerator(choiceArray); //generate bot's choice
      GameResult(P1Choice, choiceArray[0]); //determine the winner
    }, 1200); //because RandomChoiceAnimation uses setInterval, the remaining function must be contained in the setTimeout
  }

  // only run when player choose paper
  function playKertas() {
    let choiceArray = [];
    MakeChoiceUnclickable(1200);
    ActiveStateRemoval();
    let P1Choice = 3;
    console.log("YOU choose PAPER!");
    document.querySelector(".player.kertas").classList.add("active"); //highlight the player's choice
    RandomChoiceAnimation();
    setTimeout((fungsi) => {
      botChoiceGenerator(choiceArray); //generate bot's choice
      GameResult(P1Choice, choiceArray[0]); //determine the winner
    }, 1200); //because RandomChoiceAnimation uses setInterval, the remaining function must be contained in the setTimeout
  }

  function refresher() {
    ActiveStateRemoval();
    VersusReset();
  }

  return (
    <div className="body-game">
      <header className="header-game">
        <nav>
          <a href="/">
            <span class="chevron left"></span>
          </a>
          <img src="/img/logo 1.png" alt="" class="icon-nav" />
          <div class="position-relative">
            <span class="game-brand">ROCK PAPER SCISSORS</span>
          </div>
        </nav>
      </header>
      <div class="suit-game-window container">
        <div class="row">
          <div class="col-4 suit-left">
            <div class="row">
              <div class="col spacer-icon tulisan-player">
                <h2>PLAYER 1</h2>
              </div>
            </div>
            <div class="row">
              <div class="col spacer-icon">
                <div class="choice batu player" onClick={playBatu}>
                  <img class="suit-icon batu" src="/img/batu.png" alt="" />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col spacer-icon">
                <div class="choice kertas player" onClick={playKertas}>
                  <img class="suit-icon kertas" src="/img/kertas.png" alt="" />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col spacer-icon">
                <div class="choice gunting player" onClick={playGunting}>
                  <img
                    class="suit-icon gunting"
                    src="/img/gunting.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="col-4 suit-center align-self-center">
            <div class="versus-text-div">
              <h1 class="versus-text">VS</h1>
            </div>
            <div class="player-win col-4 py-3">
              <h1 style={{ marginBottom: "0.2em" }}>PLAYER</h1>
              <h1>WIN</h1>
            </div>
            <div class="bot-win col-4">
              <h1 style={{ marginBottom: "0.2em" }}>COM</h1>
              <h1>WIN</h1>
            </div>
            <div class="draw col-4">
              <h1>DRAW</h1>
            </div>
          </div>
          <div class="col-4 suit-right">
            <div class="row">
              <div class="col spacer-icon">
                <h2>COM</h2>
              </div>
            </div>
            <div class="row">
              <div class="col spacer-icon">
                <div class="choice batu bot">
                  <img class="suit-icon batu" src="/img/batu.png" alt="" />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col spacer-icon">
                <div class="choice kertas bot">
                  <img class="suit-icon kertas" src="/img/kertas.png" alt="" />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col spacer-icon">
                <div class="choice gunting bot">
                  <img
                    class="suit-icon gunting"
                    src="/img/gunting.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <div class="refresher">
              <img
                class="refresh-icon"
                src="/img/refresh.png"
                alt=""
                onClick={refresher}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

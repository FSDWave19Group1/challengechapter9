import React, { useState } from "react";
import '../components/Game.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Image } from "react-bootstrap";

const ComPlayer = ['batu', 'kertas', 'gunting']
const RandomCom = ComPlayer[Math.floor(Math.random()*ComPlayer.length)]
const PlayerBatu = document.getElementById("batu")
const PlayerKertas = document.getElementById("kertas")
const PlayerGunting = document.getElementById("gunting")

// const BgPlayerBatu = document.className("bg-batu")
// const BgPlayerKertas = document.getElementById("bg-kertas")
// const BgPlayerGunting = document.getElementById("bg-gunting")

const bgVersus = document.getElementById("vs")

class GameSuite extends React.Component {

    ClickRock = () => {
        this.ChoosePlayer("batu")
        // BgPlayerBatu.classList.add("bg-abu")
        // PlayerGunting.removeAttribute("onClick")
        // PlayerKertas.removeAttribute("onClick")
    }

    ClickPaper = () => {
        this.ChoosePlayer("kertas")
        // PlayerBatu.removeAttribute("onClick")
        // PlayerGunting.removeAttribute("onClick")
    }

    ClickScissors = () => {
        this.ChoosePlayer("gunting")
        // PlayerBatu.removeAttribute("onClick")
        // PlayerKertas.removeAttribute("onClick")
    }

    RandomComPlayer = RandomCom

    ChoosePlayer = (player) => {
        if (player === "batu"){
            console.log("player 1 batu")
            this.ChooseCom(this.RandomComPlayer)
            this.GamePlay(player,this.RandomComPlayer)
        } else if (player === "kertas"){
            console.log("player 1 kertas")
            this.ChooseCom(this.RandomComPlayer)
            this.GamePlay(player,this.RandomComPlayer)
        } else if (player === "gunting"){
            console.log("player 1 gunting")
            this.ChooseCom(this.RandomComPlayer)
            this.GamePlay(player,this.RandomComPlayer)
        }
    }

    
    // buat ganti background klu di klik tapi belum jalan
    ChooseCom(com){
        if (com === 'batu'){
            // document.getElementById("bgRockCom").classList.add("bg-abu")
            console.log('player com batu')
        } else if (com === 'kertas') {
            // document.getElementById("bgPaperCom").classList.add("bg-abu")
            console.log('player com kertas')
        } else if (com === 'gunting') {
            // document.getElementById("bgScissorsCom").classList.add("bg-abu")
            console.log('player com gunting')
        }
    }

    GamePlay = (player1,player2) => {
        let CekPlayer = (player1+player2)
        console.log(CekPlayer)
        if (CekPlayer === "batubatu" || CekPlayer === "kertaskertas" || CekPlayer === "guntinggunting"){
            console.log("draw")
            // bgVersus.src="https://cdn.discordapp.com/attachments/909631425823768586/984440885095825448/bg-draw.png"
            // bgVersus.classList.add("setImgVs")
        } else if (CekPlayer === "batugunting" || CekPlayer === "kertasbatu" || CekPlayer === "guntingkertas"){
            console.log("player 1 win")
            // document.getElementById("vs").src("https://cdn.discordapp.com/attachments/909631425823768586/984440885095825448/bg-draw.png")
            // bgVersus.src="https://cdn.discordapp.com/attachments/909631425823768586/984440885376876554/bgPlayer1Win.png"
            // bgVersus.classList.add("setImgVs")
        } else if (CekPlayer === "batukertas" || CekPlayer === "kertasgunting" || CekPlayer === "guntingbatu"){
            console.log("COM win")
            // document.getElementById("vs").src("https://cdn.discordapp.com/attachments/909631425823768586/984440885095825448/bg-draw.png")
            // bgVersus.src="https://cdn.discordapp.com/attachments/909631425823768586/984440884902899772/bgComWin.png"
            // bgVersus.classList.add("setImgVs")
        }    
    }

    RefreshPage(){
        window.location.reload()
    }
    
    
    render () {
        return (
            <div className="bg-game">
                    <div className="main-page">
                        <div className="container">
                            <div className="row">
                                <nav className="navbar navbar-expand">
                                    <div className="me-4">
                                        <Image src="https://cdn.discordapp.com/attachments/909631425823768586/984440884672204840/backButton.png"/>
                                    </div>
                                    <div>
                                        <Image src="https://cdn.discordapp.com/attachments/909631425823768586/984440885808873502/logo.png"/>
                                    </div>
                                    <p className="txt-style text-warning ms-4">
                                        ROCK PAPER SCISSORS
                                    </p>
                                </nav>
                            </div>
                            <div className="row">
                                <div className="col"></div>
                                <div className="col d-flex justify-content-center text-black txt-style">PLAYER 1</div>
                                <div className="col"></div>
                                <div className="col d-flex justify-content-center text-black txt-style">COM</div>
                                <div className="col"></div>
                            </div>
                            {/* <!-- PLAYER-1 --> */}
                            <div className="row">
                                <div className="col"></div>
                                <div className="col">
                                    <div className="row mt-4">
                                        <div className="pict col bg-batu d-flex justify-content-center align-items-center">
                                            <Image style={{height:'12vh'}} id="batu" src="https://cdn.discordapp.com/attachments/909631425823768586/984440886794522624/rock.png" onClick={this.ClickRock}/>
                                        </div>
                                    </div>
                                    <div className="row mt-4">
                                        <div className="pict col bg-gunting d-flex justify-content-center align-items-center">
                                            <Image style={{height:'12vh'}} id="kertas" src="https://cdn.discordapp.com/attachments/909631425823768586/984440886052155402/paper.png" onClick={this.ClickPaper}/>
                                        </div>
                                    </div>
                                    <div className="row mt-4">
                                        <div className="pict col bg-kertas d-flex justify-content-center align-items-center">
                                            <Image style={{height:'12vh'}} id="gunting" src="https://cdn.discordapp.com/attachments/909631425823768586/984440887096524820/scissors.png" onClick={this.ClickScissors}/>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- VS --> */}
                                <div className="col align-self-center d-flex justify-content-center">
                                    <Image style={{height:'12vh'}} id="vs" src="https://cdn.discordapp.com/attachments/909631425823768586/984444551940964352/vs.png"/>
                                </div>
                                {/* <!-- COM --> */}
                                <div className="col">
                                    <div className="row mt-4">
                                        <div className="pict col bg-com-batu d-flex justify-content-center align-items-center">
                                            <Image style={{height:'12vh'}} src="https://cdn.discordapp.com/attachments/909631425823768586/984440886794522624/rock.png"/>
                                        </div>
                                    </div>
                                    <div className="row mt-4">
                                        <div className="pict col bg-com-kertas d-flex justify-content-center align-items-center">
                                            <Image style={{height:'12vh'}} src="https://cdn.discordapp.com/attachments/909631425823768586/984440886052155402/paper.png"/>
                                        </div>
                                    </div>
                                    <div className="row mt-4">
                                        <div className="pict col bg-com-gunting d-flex justify-content-center align-items-center">
                                            <Image style={{height:'12vh'}} src="https://cdn.discordapp.com/attachments/909631425823768586/984440887096524820/scissors.png"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col"></div>
                            </div>
                            <div className="row">
                                <div className="d-flex justify-content-center refresh">
                                    <Image className="fas fa-sync fa-spin" src="https://cdn.discordapp.com/attachments/909631425823768586/984440886479978536/refresh.png" onClick={this.RefreshPage}/>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        );
    }    
}

export default GameSuite;
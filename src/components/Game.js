import React from "react";
import '../components/Game.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Image } from "react-bootstrap";
import CobaKlikDom from "../components/cobaAja";

class GameSuite extends React.Component {

    // const RockPlayer = document.getElementbyId("batu")
    // const PaperPlayer = document.getElementbyId("kertas")
    // const ScissorsPlayer = document.getElementbyId("gunting")

    ClickRock = () => {
        this.ChoosePlayer("batu")
        this.ChooseCom(RandomComPlayer)
    }

    ClickPaper = () => {
        this.ChoosePlayer("kertas")
    }

    ClickScissors = () => {
        this.ChoosePlayer("gunting")
    }

    ChoosePlayer = (player) => {
        if (player === "batu"){
            console.log("batu jalan")
            ChooseCom(random)
        } else if (player === "kertas"){
            console.log("kertas jalan")
        } else if (player === "gunting"){
            console.log("gunting jalan")
        }
    }

    ComPlayer = ['rock', 'paper', 'scissors']
    RandomComPlayer = ComPlayer[Math.floor(Math.random()*ComPlayer.length)]

    ChooseCom(random){
        if (random === 'rock'){
            // document.getElementById("bgRockCom").classList.add("bgAbu")
            console.log('com batu')
        } else if (random === 'paper') {
            // document.getElementById("bgPaperCom").classList.add("bgAbu")
            console.log('com kertas')
        } else if (random === 'scissors') {
            // document.getElementById("bgScissorsCom").classList.add("bgAbu")
            console.log('com gunting')
        }
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
                                    <Image className="fas fa-sync fa-spin" src="https://cdn.discordapp.com/attachments/909631425823768586/984440886479978536/refresh.png"/>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        );
    }    
}

export default GameSuite;
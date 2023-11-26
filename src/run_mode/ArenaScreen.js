import { useEffect, useRef, useState } from "react"
import ShowImage from "../utils/ShowImage"
import Button from '@mui/material/Button';
import Timer from "./Timer";

const ArenaScreen = ({ currentPlayer, playerisPlaying, flashScore, donePlaying, nextPlayer, backgroundColor }) =>{

    const time = {
        "Bar":30,
        "Beam":90,
        "Floor":70,
        "Vault":20
    }

    const color = backgroundColor === 'black' ? 'white' : 'black'
    console.log(currentPlayer)
    return (
        <div style={{width:"50%", backgroundColor:backgroundColor, color:color}}>
            <div style={{border:"1px solid grey"}}>
                <h2 style={{textAlign:"center"}}>Arena Screen</h2>
            </div>
            <div style={{minHeight:"75vh", marginLeft:"20px", marginTop:"20px", border:'1px solid grey', borderTop:"none", borderLeft:"none", borderBottom:'none'}}>
                <div style={{display:"flex"}}>
                    <ShowImage file={currentPlayer['playerPicture']}/>
                    <ul>
                        <li>Player Name: {currentPlayer['playerName']}</li>
                        <li>Team Name: {currentPlayer['teamName']}</li>
                        <li>Team Number: {currentPlayer['teamNumber']}</li>
                        <li>Class: {currentPlayer['class']}</li>
                        <li>GPA: {currentPlayer['gpa']}</li>
                        <li>Major: {currentPlayer['major']}</li>
                        <li>Performance: {currentPlayer['performanceName']}</li>
                        <li>AverageScore: {currentPlayer['average_score']}</li>
                        {currentPlayer['vaultInfo'] ? <li>Vault Type: {currentPlayer['vaultInfo']}</li> : null}
                    </ul>
                </div>
                {playerisPlaying &&
                <div style={{display:"flex", width:"100%"}}>
                    <div style={{display:"flex", flexDirection:"column", width:"50%", justifyContent:"center", alignItems:"center"}}>
                        <img src={process.env.PUBLIC_URL + "/backflip.gif"} style={{height:"150px", width:"65%"}} />
                        <Button variant="contained" color="success" onClick={()=>donePlaying()} disabled={false} style={{width:"65%"}}>
                            Add her Score!!
                        </Button>
                    </div>
                    <Timer timerComplete={()=>donePlaying()} time={time[currentPlayer['performanceName']]}/>
                </div>
                }
                {flashScore && 
                <div style={{display:"flex", flexDirection:"column", width:"100%", justifyContent:"center", alignItems:"center", marginTop:"10px"}}>
                    <img src={process.env.PUBLIC_URL + "/new_score2.gif"} style={{height:"100px", width:"50%"}} />
                    <Button variant="contained" color="success" onClick={()=>nextPlayer()} disabled={false} style={{width:'50%'}}>
                        Great!! Move to Next Player
                    </Button>
                </div>}
            </div>

        </div>
    )

}

export default ArenaScreen

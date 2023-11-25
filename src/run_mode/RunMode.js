import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { useRef, useState } from "react";
import ScoreKeeperScreen from "./ScoreKeeperScreen";
import { getGymnastDetails } from "../database/DB";
import ArenaScreen from "./ArenaScreen";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const RunMode  = () =>{
    const location = useLocation();
    const receivedData = useRef(location.state?.finalData || {})
    const finalPreparedData = useRef(prepareData(receivedData.current))
    const [currentPlayerIndex2, setCurrentPlayerIndex2] = useState([0,0]);
    const [dataAsState, setDataasState] = useState(finalPreparedData.current)
    const count = useRef(1);
    const history = useHistory()
    const total = finalPreparedData.current.length * 6

    //states
    const [playerisPlaying, setPP] = useState(true)
    const [addScore, setaddScore] = useState(false)
    const [flashScore, setflashScore] = useState(false)
    //states' enable/disable functions
    const donePlaying = () =>{
        setPP(false)
        setaddScore(true)
    }
    // console.log('count', count)
    const scoreAdded = (data) =>{
        setPP(false)
        setaddScore(false)
        setflashScore(true)
        //TODO: add score to the main data table
        finalPreparedData.current[currentPlayerIndex2[0]][currentPlayerIndex2[1]]['score'] = data
        setDataasState(finalPreparedData.current)
    }
    const nextPlayer = () =>{
        setPP(true)
        setaddScore(false)
        setflashScore(false)
        // console.log("count", count, "total", total)
        if(count.current >= total){
            const data = {
                data:finalPreparedData.current,
                mode:receivedData.current['setup']
            }
            history.push({
                pathname:"/postmeet",
                state:{data}
            })
        }
        count.current += 1
        var indexArray = [0,0]
        if(currentPlayerIndex2[1] === 5){
            indexArray[0] = currentPlayerIndex2[0] + 1
            indexArray[1] = 0
        }else{
            indexArray[0] = currentPlayerIndex2[0]
            indexArray[1] = currentPlayerIndex2[1] + 1
        }
        setCurrentPlayerIndex2(indexArray)
    }

    return (
        <div style={{width:"100%"}}>
            <div style={{height:'70px'}}></div>
            <div style={{display:'flex'}}>
                <ArenaScreen currentPlayer={finalPreparedData.current[currentPlayerIndex2[0]][currentPlayerIndex2[1]]} playerisPlaying={playerisPlaying} flashScore={flashScore} donePlaying={donePlaying} nextPlayer={nextPlayer}/>
                <ScoreKeeperScreen finalPreparedData={finalPreparedData.current} addScore={addScore} scoreAdded={scoreAdded} mode={receivedData.current['setup']} dataAsState={dataAsState}/>
            </div>
        </div>
    )
}

export default RunMode

const prepareData = (data) =>{

    const finalData = []

    const totalTeam = () =>{
        if(data.setup === 'duel'){
            return 2
        }else if(data.setup === 'triangular'){
            return 3
        }else if(data.setup === 'quad'){
            return 4
        }
    }

    /////////////////////////////

    //add vault team1
    const team1Vault = makeJsonofArray("Vault",data['team1']['lineUpInfo']['vaultLineup'], data['team1']['playerPictures'], data['team1']['teamName'], "team1", data['team1']['lineUpInfo']['vaultType'])
    finalData.push(team1Vault)
    //add vault team2
    const team2Vault = makeJsonofArray("Vault",data['team2']['lineUpInfo']['vaultLineup'], data['team2']['playerPictures'], data['team2']['teamName'], "team2", data['team2']['lineUpInfo']['vaultType'])
    finalData.push(team2Vault)
    //add vault team3 (if triangular)
    var team3Vault = null;
    if(totalTeam() >= 3){
        makeJsonofArray("Vault",data['team3']['lineUpInfo']['vaultLineup'], data['team3']['playerPictures'], data['team3']['teamName'], "team3", data['team3']['lineUpInfo']['vaultType'])
        finalData.push(team3Vault)
    }
    //add vault team4 (if triangular)
    var team4Vault = null;
    if(totalTeam() === 4){
        makeJsonofArray("Vault",data['team4']['lineUpInfo']['vaultLineup'], data['team4']['playerPictures'], data['team4']['teamName'], "team4", data['team4']['lineUpInfo']['vaultType'])
        finalData.push(team4Vault)
    }

    /////////////////////////////

    //add bar team1
    const team1Bar = makeJsonofArray("Bar",data['team1']['lineUpInfo']['barLineup'], data['team1']['playerPictures'], data['team1']['teamName'], "team1")
    finalData.push(team1Bar)
    //add bar team2
    const team2Bar = makeJsonofArray("Bar",data['team2']['lineUpInfo']['barLineup'], data['team2']['playerPictures'], data['team2']['teamName'], "team2")
    finalData.push(team2Bar)
    //add bar team3 (if triangular)
    var team3Bar = null;
    if(totalTeam() >= 3){
        makeJsonofArray("Bar",data['team3']['lineUpInfo']['barLineup'], data['team3']['playerPictures'], data['team3']['teamName'], "team3")
        finalData.push(team3Bar)
    }
    //add bar team4 (if triangular)
    var team4Bar = null;
    if(totalTeam() === 4){
        makeJsonofArray("Bar",data['team4']['lineUpInfo']['barLineup'], data['team4']['playerPictures'], data['team4']['teamName'], "team4")
        finalData.push(team4Bar)
    }

    /////////////////////////////

    //add beam team1
    const team1Beam = makeJsonofArray("Beam",data['team1']['lineUpInfo']['beamLineup'], data['team1']['playerPictures'], data['team1']['teamName'], "team1")
    finalData.push(team1Beam)
    //add beam team2
    const team2Beam = makeJsonofArray("Beam",data['team2']['lineUpInfo']['beamLineup'], data['team2']['playerPictures'], data['team2']['teamName'], "team2")
    finalData.push(team2Beam)
    //add beam team3 (if triangular)
    var team3Beam = null;
    if(totalTeam() >= 3){
        makeJsonofArray("Beam",data['team3']['lineUpInfo']['beamLineup'], data['team3']['playerPictures'], data['team3']['teamName'], "team3")
        finalData.push(team3Beam)
    }
    //add beam team4 (if triangular)
    var team4Beam = null;
    if(totalTeam() === 4){
        makeJsonofArray("Beam",data['team4']['lineUpInfo']['beamLineup'], data['team4']['playerPictures'], data['team4']['teamName'], "team4")
        finalData.push(team4Beam)
    }

    /////////////////////////////

    //add floor team1
    const team1Floor = makeJsonofArray("Floor",data['team1']['lineUpInfo']['floorLineup'], data['team1']['playerPictures'], data['team1']['teamName'], "team1")
    finalData.push(team1Floor)
    //add floor team2
    const team2Floor = makeJsonofArray("Floor",data['team2']['lineUpInfo']['floorLineup'], data['team2']['playerPictures'], data['team2']['teamName'], "team2")
    finalData.push(team2Floor)
    //add floor team3 (if triangular)
    var team3Floor = null;
    if(totalTeam() >= 3){
        makeJsonofArray("Floor",data['team3']['lineUpInfo']['floorLineup'], data['team3']['playerPictures'], data['team3']['teamName'], "team3")
        finalData.push(team3Floor)
    }
    //add floor team4 (if triangular)
    var team4Floor = null;
    if(totalTeam() === 4){
        makeJsonofArray("Floor",data['team4']['lineUpInfo']['floorLineup'], data['team4']['playerPictures'], data['team4']['teamName'], "team4")
        finalData.push(team4Floor)
    }

    // console.log(finalData)
    return finalData

}

const makeJsonofArray = (performanceName, lineup, playerPictures, teamName, teamNumberasString, vaultInfo) =>{
    // console.log(lineup)
    const data = []
    for(var i = 0;i<lineup.length;i++){
        const other_info = getGymnastDetails(lineup[i])
        data.push({
            "playerName":lineup[i],
            "teamNumber":teamNumberasString,
            "performanceName":performanceName,
            "playerPicture":getPicture(playerPictures, lineup[i]),
            "teamName":teamName,
            "vaultInfo":vaultInfo ? vaultInfo[i] : null,
            "class":other_info.class,
            "major":other_info.major,
            "gpa":other_info.gpa
        })
    }
    return data
}

const getPicture = (playerPictures, playerName) =>{
    // console.log(playerName)
    const index = parseInt(playerName[playerName.length - 1]) - 1
    return playerPictures[index]
}
import { useEffect, useRef } from "react"
import { getGymnastDetails } from "../database/DB"

const ArenaScreen = ({ receivedData }) =>{
    
    const finalPreparedData = useRef(prepareData(receivedData.current))

    useEffect(()=>{
        console.log(receivedData)
        if(!receivedData.current['team1']['playerPictures']){
            receivedData.current['team1']['playerPictures'] = [null, null, null, null, null, null]
        }
        if(!receivedData.current['team2']['playerPictures']){
            receivedData.current['team2']['playerPictures'] = [null, null, null, null, null, null]
        }
        if(receivedData.current.setup == 'triangular'){
            if(!receivedData.current['team3']['playerPictures']){
                receivedData.current['team3']['playerPictures'] = [null, null, null, null, null, null]
            }
        }else if(receivedData.current.setup == 'quad'){
            if(!receivedData.current['team3']['playerPictures']){
                receivedData.current['team3']['playerPictures'] = [null, null, null, null, null, null]
            }
            if(!receivedData.current['team4']['playerPictures']){
                receivedData.current['team4']['playerPictures'] = [null, null, null, null, null, null]
            }
        }
    },[])

    return (
        <div style={{width:"50%"}}>
            <div style={{border:"1px solid grey"}}>
                <h2 style={{textAlign:"center"}}>Arena Screen</h2>
            </div>
            <div style={{minHeight:"75vh", border:"1px solid grey", borderTop:"none", borderLeft:'none', borderBottom:"none"}}>

            </div>
        </div>
    )
}

export default ArenaScreen

const prepareData = (data) =>{

    console.log(data)
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

    console.log(finalData)
    return finalData

}

const makeJsonofArray = (performanceName, lineup, playerPictures, teamName, teamNumberasString, vaultInfo) =>{
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
    const index = parseInt(playerName[playerName.length - 1]) - 1
    return playerPictures[index]
}
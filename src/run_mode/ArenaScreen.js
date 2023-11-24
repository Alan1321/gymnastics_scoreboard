import { useEffect, useRef } from "react"

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




}



const getPicture = (playerPictures, playerName) =>{
    const index = parseInt(playerName[playerName.length - 1]) - 1
    return playerPictures[index]
}
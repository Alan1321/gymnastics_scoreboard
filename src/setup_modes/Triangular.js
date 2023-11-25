import React, { useRef, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import InputDropDowns from '../utils/InputDropDowns';
import UploadImages from '../utils/UploadImages';
import UploadImage from '../utils/UplaodImage';
import Button from '@mui/material/Button';
import Modal from "react-modal"
import CheckMeetUI from '../checkmeet_mode/CheckMeet';
import { useHistory } from 'react-router-dom';
import { fetchPlayers } from '../database/DB';

Modal.setAppElement('#root');

const Triangular = () =>{
    
    const history = useHistory();

    const [currentTeam, setCurrentTeam] = useState(1);
    const location = useLocation();
    const receivedData = useRef(location.state?.data || {})
    const [modal, setModal] = useState(false);
    const [buttonNext, setButtonNext] = useState(false);
    
    useEffect(()=>{
        if(currentTeam === 1){
            receivedData.current['team1']['playerPictures'] = [null, null, null, null, null, null]
            receivedData.current['team1']['logo'] = null

        }else if (currentTeam === 2){
            receivedData.current['team2']['playerPictures'] = [null, null, null, null, null, null]
            receivedData.current['team2']['logo'] = null

        }else if(currentTeam === 3){
            receivedData.current['team3']['playerPictures'] = [null, null, null, null, null, null]
            receivedData.current['team3']['logo'] = null
        }
    },[currentTeam])

    const currentTeamName = () =>{
        if(currentTeam === 1){
            return receivedData.current['team1']['teamName']
        }else if(currentTeam === 2){
            return receivedData.current['team2']['teamName']
        }else if(currentTeam === 2){
            return receivedData.current['team3']['teamName']
        }
    }

    var data = null

    if(currentTeam === 1){
        data = fetchPlayers(receivedData.current['team1']['teamName']).map((gymnast)=>gymnast.name)
    }else if(currentTeam === 2){
        data = fetchPlayers(receivedData.current['team2']['teamName']).map((gymnast)=>gymnast.name)
    }else if(currentTeam === 3){
        data = fetchPlayers(receivedData.current['team3']['teamName']).map((gymnast)=>gymnast.name)
    }

    const getDropDownData = (data) =>{
        if(currentTeam === 1){
            receivedData.current['team1']['lineUpInfo'] = data
        }else if (currentTeam === 2){
            receivedData.current['team2']['lineUpInfo'] = data
        }else if (currentTeam === 3){
            receivedData.current['team3']['lineUpInfo'] = data
        }
        setButtonNext(true)
    }

    const getPlayerPictures = (data) =>{
        if(currentTeam === 1){
            receivedData.current['team1']['playerPictures'] = data
        }else if (currentTeam === 2){
            receivedData.current['team2']['playerPictures'] = data
        }else if (currentTeam === 3){
            receivedData.current['team3']['playerPictures'] = data
        }
    }

    const getLogo = (data) =>{
        if(currentTeam === 1){
            receivedData.current['team1']['logo'] = data
        }else if (currentTeam === 2){
            receivedData.current['team2']['logo'] = data
        }else if (currentTeam === 3){
            receivedData.current['team3']['logo'] = data
        }
    }

    const checkData = () => {
        setModal(true)
    }

    const sendToParentCheckMeet = (data) =>{
        // console.log(data)
        if(data.fix === true){
            setModal(false)
        }
        if(data.next === true){
            setModal(false)
            setCurrentTeam(currentTeam + 1)
        }
    }

    const sendToParentCheckMeet2 = (data) =>{
        if(data.fix === true){
            setModal(false)
        }
        if(data.next === true){
            setModal(false)
            setCurrentTeam(currentTeam + 1)
        }
    } 

    const sendToParentCheckMeet3 = (data) =>{
        if(data.fix === true){
            setModal(false)
        }
        if(data.next === true){
            setModal(false)
            const finalData = receivedData.current
            console.log("finalData", finalData)
            history.push({
                pathname:'/run',
                state:{finalData}
            })
        }
    } 

    return (
        <div>
            <div style={{height:'70px'}}></div>
            {currentTeam === 1 &&
                <div>
                    <div style={{display:'flex', alignItems:"center", width:"100%"}}>
                        <h2 style={{textAlign:'center', width:"50%", flexDirection:"row-reverse", display:"flex"}}>Team1 Data</h2>
                        <div style={{marginTop:"1%", display:"flex", flexDirection:"row-reverse", width:'50%'}}>
                            <Button variant="contained" color="success" onClick={checkData} disabled={!buttonNext} style={{marginRight:"45px"}}>
                                Next
                            </Button>
                        </div>
                    </div>
                    <div style={{display:"flex"}}>
                        <InputDropDowns getDropDownData={getDropDownData} data={data} currentTeam={currentTeam}/>
                        <div style={{width:"15%", marginLeft:'10px', height:"40%"}}>
                            <h3 style={{textAlign:"center"}}>Select Team Logo</h3>
                            <UploadImage image_url={"/upload_logo.jpg"} label={"Upload Team Logo"} sendToParent={getLogo} currentTeam={currentTeam}/>
                        </div>
                        <UploadImages sendToParent={getPlayerPictures}/>
                    </div>
                    {modal && <CheckMeetUI  receivedData={receivedData.current['team1']} sendToParent={sendToParentCheckMeet}/> }
                </div>
            }
            {currentTeam === 2 &&
                <div>
                    <div style={{display:'flex', alignItems:"center", width:"100%"}}>
                       <h2 style={{textAlign:'center', width:"50%", flexDirection:"row-reverse", display:"flex"}}>Team2 Data</h2>
                        <div style={{marginTop:"1%", display:"flex", flexDirection:"row-reverse", width:'50%'}}>
                            <Button variant="contained" color="success" onClick={checkData} disabled={!buttonNext} style={{marginRight:"45px"}}>
                                Next
                            </Button>
                        </div>
                    </div>
                    <div style={{display:"flex"}}>
                        <InputDropDowns getDropDownData={getDropDownData} data={data} currentTeam={currentTeam}/>
                        <div style={{width:"15%", marginLeft:'10px', height:"40%"}}>
                            <h3 style={{textAlign:"center"}}>Select Team Logo</h3>
                            <UploadImage image_url={"/upload_logo.jpg"} label={"Upload Team Logo"} sendToParent={getLogo}/>
                        </div>
                        <UploadImages sendToParent={getPlayerPictures}/>
                    </div>
                    {modal && <CheckMeetUI  receivedData={receivedData.current['team2']} sendToParent={sendToParentCheckMeet2}/> }
                </div>
            }
            {currentTeam === 3 &&
                <div>
                    <div style={{display:'flex', alignItems:"center", width:"100%"}}>
                       <h2 style={{textAlign:'center', width:"50%", flexDirection:"row-reverse", display:"flex"}}>Team3 Data</h2>
                        <div style={{marginTop:"1%", display:"flex", flexDirection:"row-reverse", width:'50%'}}>
                            <Button variant="contained" color="success" onClick={checkData} disabled={!buttonNext} style={{marginRight:"45px"}}>
                                Next
                            </Button>
                        </div>
                    </div>
                    <div style={{display:"flex"}}>
                        <InputDropDowns getDropDownData={getDropDownData} data={data} currentTeam={currentTeam}/>
                        <div style={{width:"15%", marginLeft:'10px', height:"40%"}}>
                            <h3 style={{textAlign:"center"}}>Select Team Logo</h3>
                            <UploadImage image_url={"/upload_logo.jpg"} label={"Upload Team Logo"} sendToParent={getLogo}/>
                        </div>
                        <UploadImages sendToParent={getPlayerPictures}/>
                    </div>
                    {modal && <CheckMeetUI  receivedData={receivedData.current['team3']} sendToParent={sendToParentCheckMeet3}/> }
                </div>
            }
        </div>
    )
}

export default Triangular

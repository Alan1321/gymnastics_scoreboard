import React, { useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import InputDropDowns from '../utils/InputDropDowns';
import UploadImages from '../utils/UploadImages';
import UploadImage from '../utils/UplaodImage';
import Button from '@mui/material/Button';
import Modal from "react-modal"
import CheckMeetUI from '../checkmeet_mode/CheckMeet';

Modal.setAppElement('#root');

const Duel = () =>{
    
    const data = [1,2,3,4,5]
    const [currentTeam, setCurrentTeam] = useState(1);
    const location = useLocation();
    const receivedData = useRef(location.state?.data || {})
    const [modal, setModal] = useState(false);
    const [buttonNext, setButtonNext] = useState(false);

    const getDropDownData = (data) =>{
        if(currentTeam === 1){
            receivedData.current['team1']['lineUpInfo'] = data
        }else if (currentTeam === 2){
            receivedData.current['team2'] = {}
            receivedData.current['team2']['lineUpInfo'] = data
        }
        setButtonNext(true)
    }

    const getPlayerPictures = (data) =>{
        if(currentTeam === 1){
            receivedData.current['team1']['playerPictures'] = data
        }else if (currentTeam === 2){
            receivedData.current['team2'] = {}
            receivedData.current['team2']['playerPictures'] = data
        }
    }

    const getLogo = (data) =>{
        if(currentTeam === 1){
            receivedData.current['team1']['logo'] = data
        }else if (currentTeam === 2){
            receivedData.current['team2']['logo'] = data
        }
    }

    const checkData = () => {
        setModal(true)
    }

    const sendToParentCheckMeet = (data) =>{
        if(data.fix === true){
            setModal(false)
        }
        if(data.next === true){
            setModal(false)
            setCurrentTeam(currentTeam + 1)
        }
    }

    return (
        <div>
            <div style={{height:'70px'}}></div>
            <div>
                <h2 style={{textAlign:"center"}}>Team1 Data for Duel Mode.</h2>
                <div style={{display:"flex"}}>
                    <InputDropDowns getDropDownData={getDropDownData} data={data}/>
                    <div style={{width:"15%", marginLeft:'10px', height:"40%"}}>
                        <h3 style={{textAlign:"center"}}>Select Team Logo</h3>
                        <UploadImage image_url={"/upload_logo.jpg"} label={"Upload Team Logo"} sendToParent={getLogo}/>
                    </div>
                    <UploadImages sendToParent={getPlayerPictures}/>
                </div>
                <div style={{justifyContent:"space-around", marginTop:"1%", marginLeft:"95%"}}>
                    <Button variant="contained" color="success" onClick={checkData} disabled={!buttonNext}>
                        Next
                    </Button>
                </div>
                {modal && <CheckMeetUI  receivedData={receivedData.current['team1']} sendToParent={sendToParentCheckMeet}/> }
            </div>
        </div>
    )
}

export default Duel

import React, { useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import InputDropDowns from '../utils/InputDropDowns';
import UploadImages from '../utils/UploadImages';
import UploadImage from '../utils/UplaodImage';
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import IconButton from '@mui/material/IconButton';

const Duel = () =>{

    const location = useLocation();
    const receivedData = location.state?.data || {};
    const data = [1,2,3,4,5]

    const getDropDownData = (data) =>{
        console.log(data)
    }

    const getPlayerPictures = (data) =>{

    }

    const getLogo = (data) =>{
        
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
                    <UploadImages />
                </div>
                <div style={{justifyContent:"space-around", marginTop:"1%", marginLeft:"95%"}}>
                    <Button variant="contained" color="success" >
                        Next
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Duel
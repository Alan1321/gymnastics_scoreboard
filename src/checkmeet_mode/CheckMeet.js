import Button from '@mui/material/Button';
import Modal from "react-modal"
import { useRef, useState, useEffect } from 'react';

const CheckMeetUI = ({ receivedData, sendToParent }) =>{

    const dataChecked = useRef();
    dataChecked.current = CheckMeet(receivedData)
    const [goBackButton, setGoBackButton] = useState(dataChecked.current.some(value => value === true));
    const [Next, setNext] = useState(false);

    const backHandler = () =>{
        sendToParent({fix:true, next:false})
    }

    const nextHandler = () =>{
        sendToParent({fix:false, next:true})
    }

    return (
        <Modal
        isOpen={true}
        style={{
            overlay: {
                position: 'fixed',
                top: '50px',
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0,0,0,0.1)'
            },
            content:{
                backgroundColor:"rgba(255,255,255,0.8)"
            }
        }}
        >
            <div style={{justifyContent:'center', textAlign:'center'}}>
                <h1 style={{marginBottom:"4%"}}>Check Meet Mode</h1>
                <h3 style={{marginBottom:"5%"}}>Verifying the input data...</h3>
                <img style={{marginTop:"-2%", height:"200px", width:"200px"}} src={process.env.PUBLIC_URL + "/blue_loading.gif"} />
                <div style={{marginLeft:"40%", marginTop:"4%"}}>
                    <CheckUI lineUpType={'Vault LineUp'} status={dataChecked.current[0]}/>
                    <CheckUI lineUpType={'Floor LineUp'} status={dataChecked.current[1]}/>
                    <CheckUI lineUpType={'Bar LineUp'} status={dataChecked.current[2]}/>
                    <CheckUI lineUpType={'Beam LineUp'} status={dataChecked.current[3]}/>
                </div>
                {goBackButton && <Button variant="contained" color="error" onClick={backHandler} style={{marginTop:"2%"}}>Fix Data Input</Button>}
                {!goBackButton && <Button variant="contained" color="success" onClick={nextHandler} style={{marginTop:"2%"}}>Lets Go to the Next Page</Button>}
            </div>
        </Modal>      
    )
}


export default CheckMeetUI

const CheckUI = ({ lineUpType, status }) =>{
    const image_url = status ? "/red_cross_mark.png" : "/green_check_mark.png";
    return (
        <div style={{ display: "flex", alignItems: "center", marginBottom:"1%"}}>
            <img src={process.env.PUBLIC_URL + image_url} style={{ height: "30px", width: "30px", marginRight: "20px" }} />
            {!status && <h4 style={{ margin: 0 }}>{lineUpType} Verified!</h4>}
            {status && <h4 style={{ margin: 0 }}>{lineUpType} Failed, Duplicates Found or not Filled</h4>}
        </div>
    )
}

const CheckMeet = (data) => {
    console.log(data)
    data = data['lineUpInfo']
    var checks = [false, false, false, false]
    checks = checkVaultLineUp(data, checks)
    checks = checkFloorLineUp(data, checks)
    checks = checkBarLineUp(data, checks)
    checks = checkBeamLineUp(data, checks)
    return checks
}

const checkVaultLineUp = (data, checks) => {
    checks[0] = hasDuplicates(data['vaultLineup'])
    return checks
}

const checkFloorLineUp = (data, checks) =>{
    checks[1] = hasDuplicates(data['floorLineup'])
    return checks
}

const checkBarLineUp = (data, checks) =>{
    checks[2] = hasDuplicates(data['barLineup'])
    return checks
}

const checkBeamLineUp = (data, checks) =>{
    checks[3] = hasDuplicates(data['beamLineup'])
    return checks
}

const CheckJudges = (data) =>{

}

function hasDuplicates(array) {

    const seen = {};
  
    for (const element of array) {
      if (seen[element]) {
        return true; // Found a duplicate
      }
  
      seen[element] = true;
    }
  
    return false; // No duplicates found
}

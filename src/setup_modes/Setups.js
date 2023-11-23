import * as React from 'react';
import { Link, Route, Switch, useHistory } from 'react-router-dom';
import { useRef, useState } from 'react';

import "./setups.css"
import { fetchTeams } from '../database/DB';
import SelectTeams from './SelectTeams';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useScrollTrigger } from '@mui/material';


const Setups = () =>{

    const history = useHistory();
    const whichMode = useRef(null);
    const [setupMode, setSetupMode] = useState(true);


    const duelHandler = () =>{
        if(setupMode){
            setSetupMode(false);
            whichMode.current = 2
        }else{

        }
    }
    const triangularHandler = () =>{
        if(setupMode){
            setSetupMode(false);
            whichMode.current = 3
        }else{
            
        }
    }
    const quadHandler = () =>{
        if(setupMode){
            setSetupMode(false);
            whichMode.current = 4
        }else{
            
        }
    }

    return (
        <div>
            <div style={{height:'70px'}}></div>
            {setupMode &&
            <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                <h1 style={{marginBottom:"50px"}}>Select Setup</h1>
                <Stack spacing={10} direction="row">
                    <Button size="large" variant="outlined" onClick={duelHandler}>Duel</Button>
                    <Button size="large" variant="outlined" onClick={triangularHandler}>Triangular</Button>
                    <Button size="large" variant="outlined" onClick={quadHandler}>Quad</Button>
                </Stack>
            </div>
            }
            {!setupMode && <SelectTeams  selectedMode={whichMode.current} turnOff={setupMode}/>}
        </div>
    )
}

export default Setups
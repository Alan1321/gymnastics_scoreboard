import * as React from 'react';
import { Link, Route, Switch, useHistory } from 'react-router-dom';

import "./setups.css"

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const Setups = () =>{

    const history = useHistory();

    const duelHandler = () =>{
        const data = {
            "setup":"duel",
            "team1":{},
            "team2":{}
        }
        history.push({
            pathname:"/duel",
            state:{data}
        })
    }
    const triangularHandler = () =>{
        const data = {
            "setup":"duel",
            "team1":{},
            "team2":{},
            "team3":{}
        }
        history.push({
            pathname:"/duel",
            state:{data}
        })
    }
    const quadHandler = () =>{
        const data = {
            "setup":"duel",
            "team1":{},
            "team2":{},
            "team3":{},
            "team4":{}
        }
        history.push({
            pathname:"/duel",
            state:{data}
        })  
    }

    return (
        <div>
            <div style={{height:'70px'}}></div>
            <div className='buttons'>
                <Stack spacing={10} direction="row">
                    <Button size="large" variant="outlined" onClick={duelHandler}>Duel</Button>
                    <Button size="large" variant="outlined" onClick={triangularHandler}>Triangular</Button>
                    <Button size="large" variant="outlined" onClick={quadHandler}>Quad</Button>
                </Stack>
            </div>
        </div>
    )
}

export default Setups
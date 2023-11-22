import * as React from 'react';
import { Link, Route, Switch, useHistory } from 'react-router-dom';
import { useRef } from 'react';

import "./setups.css"

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


const Setups = () =>{

    const history = useHistory();
    const data = useRef(null);

    const duelHandler = () =>{
        // const data = {
        //     "setup":"duel",
        //     "team1":{
        //         "teamName":"Alabama"
        //     },
        //     "team2":{
        //         "teamName":"Alabama"
        //     }
        // }
        // history.push({
        //     pathname:"/duel",
        //     state:{data}
        // })
    }
    const triangularHandler = () =>{
        const data = {
            "setup":"triangular",
            "team1":{
                "teamName":"Alabama"
            },
            "team2":{
                "teamName":"Alabama"
            },
            "team3":{
                "teamName":"Alabama"
            }
        }
        history.push({
            pathname:"/triangular",
            state:{data}
        })
    }
    const quadHandler = () =>{
        const data = {
            "setup":"quad",
            "team1":{
                "teamName":"Alabama"
            },
            "team2":{
                "teamName":"Alabama"
            },
            "team3":{
                "teamName":"Alabama"
            },
            "team4":{
                "teamName":"Alabama"
            }
        }
        history.push({
            pathname:"/quad",
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
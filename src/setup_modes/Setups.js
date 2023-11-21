import * as React from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import "./setups.css"

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const Setups = () =>{
    return (
        <div>
            <div className='buttons'>
                <Stack spacing={10} direction="row">
                    <Button size="large" variant="outlined" component={Link} to="/duel">Duel</Button>
                    <Button size="large" variant="outlined" component={Link} to="/triangular">Triangular</Button>
                    <Button size="large" variant="outlined" component={Link} to="/quad">Quad</Button>
                </Stack>
            </div>
        </div>
    )
}

export default Setups
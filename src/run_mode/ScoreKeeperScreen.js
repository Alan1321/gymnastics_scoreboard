import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import AddScore from './AddScore';
import { useState } from 'react';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';

const ScoreKeeperScreen = ({ addScore, scoreAdded, finalPreparedData }) =>{

    const [inputValue, setInputValue] = useState('');

    return (
        <div style={{width:"50%"}}>
            <div style={{border:"1px solid grey"}}>
                <h2 style={{textAlign:"center"}}>ScoreKeeper Screen</h2>
            </div>
            <div style={{minHeight:"75vh", marginTop:"20px", border:'1px solid grey', borderTop:"none", borderRight:"none", borderBottom:'none'}}>
                <div style={{marginLeft:"10px"}}>
                    <h4>Team Meet Score Table</h4>
                </div>
                {addScore &&
                    <div style={{width:"100%", justifyContent:"center", alignItems:"center", display:'flex', flexDirection:"column"}}>
                    <div style={{border:"1px solid grey", width:"25%", textAlign:"center"}}>
                        <h3>Add Her Score</h3>
                    </div>
                    <div style={{width:"25%"}}>
                        <TextField
                        id="outlined-number"
                        label=""
                        type="number"
                        fullWidth
                        InputLabelProps={{
                            shrink: false,
                        }}
                        onChange={(e)=>setInputValue(e.target.value)}
                        />
                    </div>
                    <Button variant="contained" color="success" onClick={()=>scoreAdded(inputValue)} disabled={false} style={{width:'25%', border:'1px solid grey', marginTop:"5px"}}>
                        Submit
                    </Button>
                </div>
                }
            </div>
        </div>
    )
}

export default ScoreKeeperScreen

const calculateTeamItemScore = (teamname, item) =>{

}
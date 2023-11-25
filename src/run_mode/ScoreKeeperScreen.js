import * as React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import MeetTable from './MeetTable';

const ScoreKeeperScreen = ({ addScore, scoreAdded, finalPreparedData, mode, dataAsState }) =>{

    const [inputValue, setInputValue] = useState('');

    return (
        <div style={{width:"50%"}}>
            <div style={{border:"1px solid grey"}}>
                <h2 style={{textAlign:"center"}}>ScoreKeeper Screen</h2>
            </div>
            <div style={{minHeight:"75vh", marginTop:"20px", border:'1px solid grey', borderTop:"none", borderRight:"none", borderBottom:'none'}}>
                <MeetTable  data={finalPreparedData} mode={mode} style={{marginLeft:"10px", width:'95%', marginBottom:"10px"}}/>
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
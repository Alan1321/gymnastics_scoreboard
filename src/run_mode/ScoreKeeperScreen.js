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

const ScoreKeeperScreen = ({ sendToParentFromScoreKeeper, currentPlayerIndex, finalPreparedData }) =>{

    const [addScoreState, setAddScore] = useState(false);
    const currentPlayer = finalPreparedData[currentPlayerIndex[0]][currentPlayerIndex[1]]

    return (
        <div style={{width:"50%"}}>
            <div style={{border:"1px solid grey"}}>
                <h2 style={{textAlign:"center"}}>ScoreKeeper Screen</h2>
            </div>
            <div style={{minHeight:"75vh", marginTop:"20px", border:'1px solid grey', borderTop:"none", borderRight:"none", borderBottom:'none'}}>
                <div style={{marginLeft:"10px"}}>
                    <h4>Team Meet Score Table</h4>
                </div>
                <AddScore sendToParent={sendToParentFromScoreKeeper} addScoreState={addScoreState}/>
            </div>
        </div>
    )
}

export default ScoreKeeperScreen

const calculateTeamItemScore = (teamname, item) =>{

}
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const MeetTable = ({ mode, data }) =>{
    const meetArray = makeInitialMeetArray(mode)
    const filledArray = updateMeetArray(meetArray, data)
    const rows = makeJson(filledArray)

    return (
        <div style={{marginLeft:"10px", width:'95%', marginBottom:"10px"}}>
            <h4 style={{textAlign:"center"}}>Team Meet Score Table</h4>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell>Teams</TableCell>
                        <TableCell align="right">Vault</TableCell>
                        <TableCell align="right">Bar</TableCell>
                        <TableCell align="right">Beam</TableCell>
                        <TableCell align="right">Floor</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {rows.map((row) => (
                        <TableRow
                        key={row.name}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell component="th" scope="row">
                            {row.name}
                        </TableCell>
                        <TableCell align="right">{row.vault}</TableCell>
                        <TableCell align="right">{row.bar}</TableCell>
                        <TableCell align="right">{row.beam}</TableCell>
                        <TableCell align="right">{row.floor}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default MeetTable

const makeJson = (filledArray) =>{
    const team = ['Team1', 'Team2', 'Team3', 'Team4']
    const data = []

    for (let i = 0; i < filledArray.length; i++) {
        data.push({
            name:team[i],
            vault:filledArray[i][0],
            bar:filledArray[i][1],
            beam:filledArray[i][2],
            floor:filledArray[i][3]
        })
    }

    return data
}

const makeInitialMeetArray = (mode) =>{
    let numRows, numColumns;

    // Determine the number of rows and columns based on the mode
    if (mode === 'duel') {
      numRows = 2;
      numColumns = 4;
    } else if (mode === 'triangular' || mode === 'quad') {
      numRows = 3;
      numColumns = 4;
    } else {
      // Handle invalid mode
      throw new Error('Invalid mode');
    }
  
    // Create the 2D array and initialize it with zeros
    const meetArray = Array.from({ length: numRows }, () => Array(numColumns).fill(0));
  
    return meetArray;
}

const updateMeetArray = (meetArray, data) => {
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i].length; j++) {

        //seeing which row/col to add data to
        const teamNumber = data[i][j]['teamNumber']
        var row = 0
        if(teamNumber === 'team1'){
            row = 0
        }else if(teamNumber === 'team2'){
            row = 1
        }else if(teamNumber === 'team3'){
            row = 2
        }else if(teamNumber === 'team4'){
            row = 3
        }
        const performanceName = data[i][j]['performanceName']
        var col = 0
        if(performanceName === 'Vault'){
            col = 0
        }else if(performanceName === 'Bar'){
            col = 1
        }else if(performanceName === 'Beam'){
            col = 2
        }else if(performanceName === 'Floor'){
            col = 3
        }

        const score = data[i][j]['score'] ? data[i][j]['score'] : null
        
        if(score){
            meetArray[row][col] += parseInt(score)
        }
    }
  }

  return meetArray;
};

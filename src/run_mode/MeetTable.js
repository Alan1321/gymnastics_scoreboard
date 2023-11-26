import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

const MeetTable = ({ mode, data, ranking }) =>{
    console.log(data, mode, ranking)
    const meetArray = makeInitialMeetArray(mode)
    const filledArray = updateMeetArray(meetArray, data)
    const rows = makeJson(filledArray)
    console.log("rows", rows)

    return (
        <div style={{}}>
            <h4 style={{textAlign:"center"}}>Team Meet Score Table</h4>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        {ranking ? 
                            <>
                                <StyledTableCell>Ranking</StyledTableCell>
                                <StyledTableCell align='right'>Teams</StyledTableCell>    
                            </>
                            :
                            <StyledTableCell>Teams</StyledTableCell>
                        }
                        <StyledTableCell align="right">Vault</StyledTableCell>
                        <StyledTableCell align="right">Bar</StyledTableCell>
                        <StyledTableCell align="right">Beam</StyledTableCell>
                        <StyledTableCell align="right">Floor</StyledTableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow
                        key={row.name}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        {ranking ? 
                            <>
                                <StyledTableCell component="th" scope="row">
                                    {row.ranking}
                                </StyledTableCell>
                                <StyledTableCell align="right">{row.name}</StyledTableCell> 
                            </>
                            :
                            <StyledTableCell component="th" scope="row">
                                {row.name}
                            </StyledTableCell>
                        }
                        <StyledTableCell align="right">{row.vault}</StyledTableCell>
                        <StyledTableCell align="right">{row.bar}</StyledTableCell>
                        <StyledTableCell align="right">{row.beam}</StyledTableCell>
                        <StyledTableCell align="right">{row.floor}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default MeetTable

const makeJson = (filledArray) => {
    const team = ['Team1', 'Team2', 'Team3', 'Team4'];
    const data = [];
  
    for (let i = 0; i < filledArray.length; i++) {
      const [vault, bar, beam, floor] = filledArray[i];
  
      // Find the minimum score among the four disciplines
      const minScore = Math.min(vault, bar, beam, floor);
  
      // Calculate total score excluding the minimum score
      const totalScore = vault + bar + beam + floor - minScore;
  
      data.push({
        name: team[i],
        vault,
        bar,
        beam,
        floor,
        totalScore,
      });
    }
  
    // Calculate rankings without sorting
    const rankedTeams = data.map((team) => ({
      ...team,
      ranking: data.filter((t) => t.totalScore > team.totalScore).length + 1,
    }));
  
    return rankedTeams;
};

const makeInitialMeetArray = (mode) =>{
    let numRows, numColumns;

    // Determine the number of rows and columns based on the mode
    if (mode === 'duel') {
      numRows = 2;
      numColumns = 4;
    } else if (mode === 'triangular') {
      numRows = 3;
      numColumns = 4;
    } else if(mode === 'quad'){
        numRows = 4
        numColumns = 4
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
            meetArray[row][col] += parseFloat(score)
        }
    }
  }

  return meetArray;
};

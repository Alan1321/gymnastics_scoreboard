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

const PlayerTable = ({ data, ranking, mode }) =>{

    const allPlayers = getallPlayers(data, mode)
    const rows = makeJson(data, allPlayers)

    console.log(rows)

    return (
        <div>
            <h4 style={{textAlign:"center"}}>All Around Score Table</h4>
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

export default PlayerTable

const makeJson = (data1, allPlayers) =>{
    const data = []
    for(var i = 0;i<allPlayers.length;i++){
        const Vault = getPlayerData(data1, allPlayers[i], 'Vault')
        const Bar = getPlayerData(data1, allPlayers[i], 'Bar')
        const Beam = getPlayerData(data1, allPlayers[i], 'Beam')
        const Floor = getPlayerData(data1, allPlayers[i], 'Floor')
        
        data.push({
            name:allPlayers[i],
            vault:Vault,
            bar:Bar,
            beam:Beam,
            floor:Floor
        })
    }

    // Calculate total scores
    const teamsWithTotalScores = data.map(team => ({
        ...team,
        totalScore: team.vault + team.bar + team.beam + team.floor,
    }));
    
    // Calculate rankings without sorting
    const rankedTeams = teamsWithTotalScores.map(team => ({
        ...team,
        ranking: teamsWithTotalScores.filter(t => t.totalScore > team.totalScore).length + 1,
    }));

    return rankedTeams
}

const getallPlayers = (data, mode) =>{
    const players = []

    var lup = null;
    if(mode === 'duel'){
        lup = 2
    }else if(mode === 'triangular'){
        lup = 3
    }else if(mode === 'quad'){
        lup = 4
    }

    for(var i = 0;i<lup;i++){
        for(var j = 0;j<data[0].length;j++){
            players.push(data[i][j]['playerName'])
        }
    }
    return players
}

const getPlayerData = (data, playerName, performanceName) =>{
    for(var i = 0;i<data.length;i++){
        for(var j = 0;j<data[0].length;j++){
            if(data[i][j]['playerName'] === playerName && data[i][j]['performanceName'] === performanceName){
                const score = data[i][j]['score'] ? data[i][j]['score'] : 0
                return score
            }
        }
    }
}
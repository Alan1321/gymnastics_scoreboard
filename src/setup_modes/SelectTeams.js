import { useRef, useState, useEffect } from "react"
import { fetchTeams } from "../database/DB"
import { TextField } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Swal from 'sweetalert2'
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const SelectTeams = ({ selectedMode, turnOff }) =>{

    const teamData = fetchTeams();
    const color = turnOff ? "red" : "black";
    const width = "20%"
    const size = selectedMode; // specify the desired size
    const nullArray = Array.from({ length: size }).fill(null);
    const selectedTeams = useRef(nullArray)
    const [buttonNext, setButtonNext] = useState(false);
    const history = useHistory();

    const handler1 = (e) =>{
        selectedTeams.current[0] = e.target.value
        setButtonNext(true)
    }
    const handler2 = (e) =>{
        selectedTeams.current[1] = e.target.value
        setButtonNext(true)
    }
    const handler3 = (e) =>{
        selectedTeams.current[2] = e.target.value
        setButtonNext(true)
    }
    const handler4 = (e) =>{
        selectedTeams.current[3] = e.target.value
        setButtonNext(true)
    }

    const checkData = () =>{
        const duplicate = hasDuplicates(selectedTeams.current)
        if(duplicate){
            Swal.fire({
                title: 'Error!',
                text: 'Duplicate Team Found',
                icon: 'error',
                confirmButtonText: 'Reselect Teams'
            })
            setButtonNext(false)
            return 
        }

        var data = null;

        if(selectedMode === 2){
            data = {
                "setup":"duel",
                "team1":{
                    "teamName":selectedTeams.current[0]
                },
                "team2":{
                    "teamName":selectedTeams.current[1]
                }
            }
            history.push({
                pathname:"/duel",
                state:{data}
            }) 
        }else if(selectedMode === 3){
            data = {
                "setup":"duel",
                "team1":{
                    "teamName":selectedTeams.current[0]
                },
                "team2":{
                    "teamName":selectedTeams.current[1]
                },
                "team3":{
                    "teamName":selectedTeams.current[2]
                }
            }
            history.push({
                pathname:"/triangular",
                state:{data}
            })
        }else if(selectedMode === 4){
            data = {
                "setup":"duel",
                "team1":{
                    "teamName":selectedTeams.current[0]
                },
                "team2":{
                    "teamName":selectedTeams.current[1]
                },
                "team3":{
                    "teamName":selectedTeams.current[2]
                },
                "team4":{
                    "teamName":selectedTeams.current[3]
                }
            }
            history.push({
                pathname:"/quad",
                state:{data}
            })
        }
    }

    return (
        <div style={{width:'100%'}}>
            <div style={{display:'flex', alignItems:"center", width:"100%"}}>
                <h2 style={{textAlign:'center', width:"50%", flexDirection:"row-reverse", display:"flex"}}>Select Teams.</h2>
                <div style={{marginTop:"1%", display:"flex", flexDirection:"row-reverse", width:'50%'}}>
                    <Button variant="contained" color="success" onClick={checkData} disabled={!buttonNext} style={{marginRight:"45px"}}>
                        Next
                    </Button>
                </div>
            </div>
            <div style={{display:"flex", width:"100%", justifyContent:"space-evenly", height:"50vh", alignItems:"center"}}>
                <div style={{width:width}}>
                    <h3 style={{textAlign:"center", color:color}}>Team1</h3>
                    <TextField
                        select
                        label=""
                        onChange={handler1}
                        variant="outlined"
                        fullWidth
                        size="small"
                        InputLabelProps={{shrink:false}}
                        disabled={turnOff}
                    >
                        {teamData.map((item)=>(
                            <MenuItem key={item} value={item}>{item}</MenuItem>
                        ))}
                    </TextField>
                </div>
                <div style={{width:width}}>
                    <h3 style={{textAlign:"center", color:color}}>Team2</h3>
                    <TextField
                        select
                        label=""
                        onChange={handler2}
                        variant="outlined"
                        fullWidth
                        size="small"
                        InputLabelProps={{shrink:false}}
                        disabled={turnOff}
                    >
                        {teamData.map((item)=>(
                            <MenuItem key={item} value={item}>{item}</MenuItem>
                        ))}
                    </TextField>
                </div>
                {selectedMode >= 3 &&
                <div style={{width:width}}>
                    <h3 style={{textAlign:"center", color:color}}>Team3</h3>
                    <TextField
                        select
                        label=""
                        onChange={handler3}
                        variant="outlined"
                        fullWidth
                        size="small"
                        InputLabelProps={{shrink:false}}
                        disabled={turnOff}
                    >
                        {teamData.map((item)=>(
                            <MenuItem key={item} value={item}>{item}</MenuItem>
                        ))}
                    </TextField>
                </div>}
                {selectedMode >= 4 &&
                <div style={{width:width}}>
                    <h3 style={{textAlign:"center", color:color}}>Team4</h3>
                    <TextField
                        select
                        label=""
                        onChange={handler4}
                        variant="outlined"
                        fullWidth
                        size="small"
                        InputLabelProps={{shrink:false}}
                        disabled={turnOff}
                    >
                        {teamData.map((item)=>(
                            <MenuItem key={item} value={item}>{item}</MenuItem>
                        ))}
                    </TextField>
                </div>}
            </div>
        </div>
    )

}

export default SelectTeams

function hasDuplicates(array) {

    const seen = {};
  
    for (const element of array) {
      if (seen[element]) {
        return true; // Found a duplicate
      }
  
      seen[element] = true;
    }
  
    return false; // No duplicates found
}
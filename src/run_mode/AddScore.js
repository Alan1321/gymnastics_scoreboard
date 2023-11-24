import { useState } from "react";
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';

const AddScore = ({ sendToParent, addScoreState }) =>{

    const [inputValue, setInputValue] = useState('');
    const scoreAdded = () =>{
        sendToParent(inputValue)
    }

    return (
        <div>
            {addScoreState &&
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
                <Button variant="contained" color="success" onClick={scoreAdded} disabled={false} style={{width:'25%', border:'1px solid grey', marginTop:"5px"}}>
                    Submit
                </Button>
            </div>}
        </div>
    )
}

export default AddScore
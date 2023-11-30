import MenuItem from '@mui/material/MenuItem';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';

const InputDropDownn = ({data, dataFromLineUpChanges, lineUpButton}) =>{

    const choosenValues = [null, null, null, null, null, null]
    const marginBottom = "-2px";

    const sendDataToParent = () =>{
        // dataFromLineUpChanges(choosenValues)
    }

    const handler1 = (e) =>{
        choosenValues[0] = e.target.value
        sendDataToParent(choosenValues)
    }
    const handler2 = (e) =>{
        choosenValues[1] = e.target.value
        sendDataToParent(choosenValues)
    }
    const handler3 = (e) =>{
        choosenValues[2] = e.target.value
        sendDataToParent(choosenValues)
    }
    const handler4 = (e) =>{
        choosenValues[3] = e.target.value
        sendDataToParent(choosenValues)
    }
    const handler5 = (e) =>{
        choosenValues[4] = e.target.value
        sendDataToParent(choosenValues)
    }
    const handler6 = (e) =>{
        choosenValues[5] = e.target.value
        sendDataToParent(choosenValues)
    }

    return (
        <div>
            <div style={{width:'160px'}}>
                <TextField
                    select
                    label=""
                    onChange={handler1}
                    variant="outlined"
                    fullWidth
                    size="small"
                    InputLabelProps={{shrink:false}}
                    style={{}}
                >
                    {data.map((item)=>(
                        <MenuItem key={item} value={item}>{item}</MenuItem>
                    ))}
                </TextField>
                <TextField
                select
                label=""
                onChange={handler2}
                variant="outlined"
                fullWidth
                size="small"
                InputLabelProps={{shrink:false}}
                >
                    {data.map((item)=>(
                        <MenuItem key={item} value={item}>{item}</MenuItem>
                    ))}
                </TextField>
                <TextField
                    select
                    label=""
                    onChange={handler3}
                    variant="outlined"
                    fullWidth
                    size="small"
                    InputLabelProps={{shrink:false}}
                >
                    {data.map((item)=>(
                        <MenuItem key={item} value={item}>{item}</MenuItem>
                    ))}
                </TextField>
                <TextField
                    select
                    label=""
                    onChange={handler4}
                    variant="outlined"
                    fullWidth
                    size="small"
                    InputLabelProps={{shrink:false}}
                >
                    {data.map((item)=>(
                        <MenuItem key={item} value={item}>{item}</MenuItem>
                    ))}
                </TextField>
                <TextField
                    select
                    label=""
                    onChange={handler5}
                    variant="outlined"
                    fullWidth
                    size="small"
                    InputLabelProps={{shrink:false}}
                >
                    {data.map((item)=>(
                        <MenuItem key={item} value={item}>{item}</MenuItem>
                    ))}
                </TextField>
                <TextField
                    select
                    label=""
                    onChange={handler6}
                    variant="outlined"
                    fullWidth
                    size="small"
                    InputLabelProps={{shrink:false}}
                >
                    {data.map((item)=>(
                        <MenuItem key={item} value={item}>{item}</MenuItem>
                    ))}
                </TextField>
            </div>
            <div style={{width:"100%", display:'flex', justifyContent:"center", marginTop:'10%'}}>
                <Button variant="contained" color="success" onClick={()=>dataFromLineUpChanges(choosenValues)} disabled={lineUpButton} >
                    Done
                </Button>
            </div>
        </div>
    )
}

export default InputDropDownn
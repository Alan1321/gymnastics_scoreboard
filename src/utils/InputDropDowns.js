import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';

const InputDropDowns = ({ data, getDropDownData}) =>{

    const dataToFill = {
        "valutLineup":[null, null, null, null, null, null],
        "vaultType":[null, null, null, null, null, null],
        "floorLineup":[null, null, null, null, null, null],
        "barLineup":[null, null, null, null, null, null],
        "beamLineup":[null, null, null, null, null, null]
    }

    const grid1Data = (value) =>{
        dataToFill['valutLineup'] = value
        getDropDownData(dataToFill)
    }
    const vaultData = (value) =>{
        dataToFill['vaultType'] = value
        getDropDownData(dataToFill)
    }
    const grid2Data = (value) =>{
        dataToFill['floorLineup'] = value
        getDropDownData(dataToFill)
    }
    const grid3Data = (value) =>{
        dataToFill['barLineup'] = value
        getDropDownData(dataToFill)
    }
    const grid4Data = (value) =>{
        dataToFill['beamLineup'] = value
        getDropDownData(dataToFill)
    }

    return (
        <div style={{display:'flex', marginLeft:"20px", width:"30%"}}>
            <div style={{width:""}}>
                <div style={{display:'flex'}}>
                    <div style={{width:""}}>
                        <h4 style={{textAlign:'center'}}>Vault LineUp</h4>
                        <InputDropDown data={data} disabled={false} label="" getDataBack={grid1Data}/>
                    </div>
                    <div style={{width:"", marginLeft:"10px"}}>
                        <h4 style={{textAlign:'center'}}>Vault Type</h4>
                        <InputDropDown data={data} disabled={false} label="" getDataBack={vaultData}/> 
                    </div>
                </div>
                <div style={{width:"50%"}}>
                    <h4 style={{textAlign:'center'}}>Floor LineUp</h4>
                    <InputDropDown data={data} disabled={false} label="" getDataBack={grid2Data}/>
                </div>
            </div>
            <div style={{marginLeft:"20px"}}>
                <div style={{}}>
                    <h4 style={{textAlign:'center'}}>Bar LineUp</h4>
                    <InputDropDown data={data} disabled={false} label="" getDataBack={grid3Data}/>
                </div>
                <div style={{}}>
                    <h4 style={{textAlign:'center'}}>Beam LineUp</h4>
                    <InputDropDown data={data} disabled={false} label="" getDataBack={grid4Data}/>
                </div>
            </div>
        </div>
    )
}


export default InputDropDowns

//Used By Component Above

const InputDropDown = ({data, getDataBack}) =>{

    const choosenValues = [null, null, null, null, null, null]
    const marginBottom = "-2px";

    const sendDataToParent = (data) =>{
        getDataBack(data)
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
        <div style={{}}>
            <TextField
                select
                label=""
                onChange={handler1}
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
    )
}

import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import { useRef, useEffect } from 'react';
import { fetchVaults } from '../database/DB';

const InputDropDowns = ({ data, getDropDownData, currentTeam}) =>{

    const dataToFill = useRef({
        "vaultLineup":[null, null, null, null, null, null],
        "vaultType":[null, null, null, null, null, null],
        "floorLineup":[null, null, null, null, null, null],
        "barLineup":[null, null, null, null, null, null],
        "beamLineup":[null, null, null, null, null, null],
    })

    useEffect(()=>{
        dataToFill.current = {
            "vaultLineup":[null, null, null, null, null, null],
            "vaultType":[null, null, null, null, null, null],
            "floorLineup":[null, null, null, null, null, null],
            "barLineup":[null, null, null, null, null, null],
            "beamLineup":[null, null, null, null, null, null],
        }
    }, [currentTeam])

    const grid1Data = (value) =>{
        dataToFill['vaultLineup'] = fillData(value, dataToFill.current['vaultLineup'])
        getDropDownData(dataToFill.current)
    }
    const vaultData = (value) =>{
        dataToFill['vaultType'] = fillData(value, dataToFill.current['vaultType'])
        getDropDownData(dataToFill.current)
    }
    const grid2Data = (value) =>{
        dataToFill['floorLineup'] = fillData(value, dataToFill.current['floorLineup'])
        getDropDownData(dataToFill.current)
    }
    const grid3Data = (value) =>{
        dataToFill['barLineup'] = fillData(value, dataToFill.current['barLineup'])
        getDropDownData(dataToFill.current)
    }
    const grid4Data = (value) =>{
        dataToFill['beamLineup'] = fillData(value, dataToFill.current['beamLineup'])
        getDropDownData(dataToFill.current)
    }

    return (
        <div style={{marginLeft:"20px", width:"30%"}}>
            <div style={{width:""}}>
                <div style={{display:'flex'}}>
                    <div style={{width:""}}>
                        <h4 style={{textAlign:'center'}}>Vault LineUp</h4>
                        <InputDropDown data={data} disabled={false} label="" getDataBack={grid1Data}/>
                    </div>
                    <div style={{width:"", marginLeft:"10px"}}>
                        <h4 style={{textAlign:'center'}}>Vault Type</h4>
                        <InputDropDown data={fetchVaults()} disabled={false} label="" getDataBack={vaultData}/> 
                    </div>
                </div>
            </div>
            <div style={{display:'flex', textAlign:"center"}}>
                <div style={{marginRight:"10px"}}>
                    <h4 style={{}}>Floor LineUp</h4>
                    <InputDropDown data={data} disabled={false} label="" getDataBack={grid2Data}/>
                </div>
                <div style={{marginRight:"10px"}}>
                    <h4 style={{}}>Bar LineUp</h4>
                    <InputDropDown data={data} disabled={false} label="" getDataBack={grid3Data}/>
                </div>
                <div style={{marginRight:"10px"}}>
                    <h4 style={{}}>Beam LineUp</h4>
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
    )
}

const fillData = (value, dataToFill) =>{
    for(var i = 0;i<value.length;i++){
        if(value[i]){
            dataToFill[i] = value[i]
        }
    }
    return dataToFill
}

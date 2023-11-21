import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const InputDropDowns = ({ data, disabled }) =>{

    return (
        <div>
            <InputDropDown data={[1,2,3,4,5]} disabled={false}/>
        </div>
    )
}

const InputDropDown = ({data, disabled}) =>{

    const choosenValues = []

    const handler1 = (e) =>{

    }
    const handler2 = (e) =>{

    }
    const handler3 = (e) =>{

    }
    const handler4 = (e) =>{

    }
    const handler5 = (e) =>{

    }
    const handler6 = (e) =>{

    }

    return (
        <div style={{display:'flex', flexDirection:'column', fontSize:'1px', height:'100px'}}>
            <FormControl sx={{ m: 1, minWidth: 130}} disabled={disabled} size="small" style={{ width: '175px', fontSize: '10px', marginBottom:'-5px'}}>
            <InputLabel id="demo-simple-select-disabled-label">Select Participant</InputLabel>
            <Select
                labelId="demo-simple-select-disabled-label"
                id="demo-simple-select-disabled"
                label="Age"
                onChange={handler1}
                InputLabelProps={{shrink:false}}
            >
                {data.map((value) => (
                <MenuItem value={value} key={value}>
                    {value}
                </MenuItem>
                ))}
            </Select>
            </FormControl>
        </div>
    )
}


export default InputDropDowns
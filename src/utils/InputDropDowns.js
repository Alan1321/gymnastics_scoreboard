import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { TextField } from '@mui/material';

const InputDropDowns = ({ data, disabled }) =>{

    const grid1Data = (value) =>{

    }
    const grid2Data = (value) =>{
        
    }
    const grid3Data = (value) =>{
        
    }
    const gridd4Data = (value) =>{
        
    }
    const vaultData = (value) =>{

    }

    return (
        <div style={{display:"flex"}}>
            <div style={{display:'flex', marginLeft:"20px"}}>
                <div>
                    <div style={{display:'flex'}}>
                        <div style={{width:"170px"}}>
                            <h4 style={{textAlign:'center'}}>Vault LineUp</h4>
                            <InputDropDown data={[1,2,3,4,5]} disabled={false} label="" getDataBack={grid1Data}/>
                        </div>
                        <div style={{width:"170px", marginLeft:"10px"}}>
                            <h4 style={{textAlign:'center'}}>Vault Type</h4>
                            <InputDropDown data={[1,2,3,4,5]} disabled={false} label="" getDataBack={vaultData}/> 
                        </div>
                    </div>
                    <div style={{width:"170px"}}>
                        <h4 style={{textAlign:'center'}}>Floor LineUp</h4>
                        <InputDropDown data={[1,2,3,4,5]} disabled={false} label="" getDataBack={grid1Data}/>
                    </div>
                </div>
                <div style={{marginLeft:"50px"}}>
                    <div style={{width:"170px"}}>
                        <h4 style={{textAlign:'center'}}>Bar LineUp</h4>
                        <InputDropDown data={[1,2,3,4,5]} disabled={false} label="" getDataBack={grid1Data}/>
                    </div>
                    <div style={{width:"170px"}}>
                        <h4 style={{textAlign:'center'}}>Beam LineUp</h4>
                        <InputDropDown data={[1,2,3,4,5]} disabled={false} label="" getDataBack={grid1Data}/>
                    </div>
                </div>
            </div>
            <div style={{width:"15%", marginLeft:'20px'}}>
                <h3 style={{textAlign:"center"}}>Select Team Logo</h3>
                <div style={{height:'40%', backgroundColor:"black"}}></div>
            </div>
            <div style={{width:"50%", marginLeft:'20px'}}>
                <h3 style={{textAlign:"center"}}>Select Player's Pictures</h3>
                <div style={{width:"100%", marginLeft:'20px', height:"40%", display:'flex', marginBottom:"10px"}}>
                    <div style={{height:'100%', backgroundColor:"black", marginRight:"10px", width:"100%"}}><img src="../../public/no_profile.png" alt="Italian Trulli" /></div>
                    <div style={{height:'100%', backgroundColor:"black", marginRight:"10px", width:"100%"}}></div>
                    <div style={{height:'100%', backgroundColor:"black", marginRight:"10px", width:"100%"}}></div>
                </div>
                <div style={{width:"100%", marginLeft:'20px', height:"40%", display:'flex'}}>
                    <div style={{height:'100%', backgroundColor:"black", marginRight:"10px", width:"100%"}}></div>
                    <div style={{height:'100%', backgroundColor:"black", marginRight:"10px", width:"100%"}}></div>
                    <div style={{height:'100%', backgroundColor:"black", marginRight:"10px", width:"100%"}}></div>
                </div>
            </div>
        </div>
    )
}


export default InputDropDowns

//Used By Component Above

const InputDropDown = ({data, disabled, label, getDataBack}) =>{

    const choosenValues = ['','','','','','']
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

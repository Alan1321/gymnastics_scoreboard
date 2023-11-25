import { TextField } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import { useRef } from 'react';
import { fetchJudges } from '../database/DB';

const SelectJudges = ({ getJudgesData }) =>{

    const data = fetchJudges();
    const judges = useRef([null, null, null, null, null, null, null, null])

    const handler1 = (e) =>{
        const value = e.target.value
        judges.current[0] = value
        getJudgesData(judges.current)
    }
    const handler2 = (e) =>{
        const value = e.target.value
        judges.current[1] = value
        getJudgesData(judges.current)
    }
    const handler3 = (e) =>{
        const value = e.target.value
        judges.current[2] = value
        getJudgesData(judges.current)
    }
    const handler4 = (e) =>{
        const value = e.target.value
        judges.current[3] = value
        getJudgesData(judges.current)
    }
    const handler5 = (e) =>{
        const value = e.target.value
        judges.current[4] = value
        getJudgesData(judges.current)
    }
    const handler6 = (e) =>{
        const value = e.target.value
        judges.current[5] = value
        getJudgesData(judges.current)
    }
    const handler7 = (e) =>{
        const value = e.target.value
        judges.current[6] = value
        getJudgesData(judges.current)
    }
    const handler8 = (e) =>{
        const value = e.target.value
        judges.current[7] = value
        getJudgesData(judges.current)
    }

    return (
        <div style={{marginTop:"3%", textAlign:'center', marginRight:"7%"}}>
            <h2>Select Judges</h2>
            <div style={{display:"flex", justifyContent:"space-evenly", marginTop:"5%"}}>
                <div style={{width:"15%", marginLeft:"2%"}}>
                    <TextField
                                select
                                label=""
                                onChange={handler1}
                                variant="outlined"
                                fullWidth
                                size="small"
                                InputLabelProps={{shrink:false}}
                                disabled={false}
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
                                disabled={false}
                            >
                                {data.map((item)=>(
                                    <MenuItem key={item} value={item}>{item}</MenuItem>
                                ))}
                    </TextField>
                </div>
                <div style={{width:"15%", marginLeft:"2%"}}>
                    <TextField
                                select
                                label=""
                                onChange={handler3}
                                variant="outlined"
                                fullWidth
                                size="small"
                                InputLabelProps={{shrink:false}}
                                disabled={false}
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
                                disabled={false}
                            >
                                {data.map((item)=>(
                                    <MenuItem key={item} value={item}>{item}</MenuItem>
                                ))}
                    </TextField>
                </div>
                <div style={{width:"15%", marginLeft:"2%"}}>
                    <TextField
                                select
                                label=""
                                onChange={handler5}
                                variant="outlined"
                                fullWidth
                                size="small"
                                InputLabelProps={{shrink:false}}
                                disabled={false}
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
                                disabled={false}
                            >
                                {data.map((item)=>(
                                    <MenuItem key={item} value={item}>{item}</MenuItem>
                                ))}
                    </TextField>
                </div>
                <div style={{width:"15%", marginLeft:"2%"}}>
                    <TextField
                                select
                                label=""
                                onChange={handler7}
                                variant="outlined"
                                fullWidth
                                size="small"
                                InputLabelProps={{shrink:false}}
                                disabled={false}
                            >
                                {data.map((item)=>(
                                    <MenuItem key={item} value={item}>{item}</MenuItem>
                                ))}
                    </TextField>
                    <TextField
                                select
                                label=""
                                onChange={handler8}
                                variant="outlined"
                                fullWidth
                                size="small"
                                InputLabelProps={{shrink:false}}
                                disabled={false}
                            >
                                {data.map((item)=>(
                                    <MenuItem key={item} value={item}>{item}</MenuItem>
                                ))}
                    </TextField>
                </div>
            </div>
        </div>
    )
}

export default SelectJudges

const checkJudges = (judges) => {
    // Check for null values
    if (judges.includes(null)) {
      return false
    }
  
    // Check for duplicates
    const uniqueJudges = new Set(judges);
    if (uniqueJudges.size !== judges.length) {
      return false
    }
  
    // If no errors found
    return true
};
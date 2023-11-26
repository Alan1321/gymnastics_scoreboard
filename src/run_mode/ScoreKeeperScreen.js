import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MeetTable from './MeetTable';

const ScoreKeeperScreen = ({ addScore, scoreAdded, finalPreparedData, mode, dataAsState }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    const newValue = e.target.value;

    // Check if the entered value is within the allowed range (0 to 10)
    if (/^\d*\.?\d*$/.test(newValue) && newValue >= 0 && newValue <= 10) {
      setInputValue(newValue);
    }
  };

  return (
    <div style={{ width: "50%" }}>
      <div style={{ border: "1px solid grey" }}>
        <h2 style={{ textAlign: "center" }}>ScoreKeeper Screen</h2>
      </div>
      <div style={{ minHeight: "75vh", marginTop: "20px", border: '1px solid grey', borderTop: "none", borderRight: "none", borderBottom: 'none' }}>
        <MeetTable data={finalPreparedData} mode={mode} style={{ marginLeft: "10px", width: '95%', marginBottom: "10px" }} />
        {addScore &&
          <div style={{ width: "100%", justifyContent: "center", alignItems: "center", display: 'flex', flexDirection: "column" }}>
            <div style={{ border: "1px solid grey", width: "25%", textAlign: "center" }}>
              <h3>Add Her Score</h3>
            </div>
            <div style={{ width: "25%" }}>
              <TextField
                id="outlined-number"
                label=""
                type="text" // Use "text" type to allow any input, not just numbers
                fullWidth
                InputProps={{ inputProps: { min: 0, max: 10, step: 0.2 } }}
                InputLabelProps={{
                  shrink: false,
                }}
                value={inputValue}
                onChange={handleChange}
              />
            </div>
            <Button
              variant="contained"
              color="success"
              onClick={() => scoreAdded(inputValue)}
              disabled={false}
              style={{ width: '25%', border: '1px solid grey', marginTop: "5px" }}
            >
              Submit
            </Button>
          </div>
        }
      </div>
    </div>
  );
}

export default ScoreKeeperScreen;

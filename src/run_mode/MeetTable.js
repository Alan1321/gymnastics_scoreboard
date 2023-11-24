const MeetTable = ({ mode, data }) =>{
    const meetArray = makeInitialMeetArray(mode)
    const filledArray = updateMeetArray(meetArray, data)
    console.log("filledArray>>>",filledArray)
    console.log(data)
    return (
        <div style={{marginLeft:"10px"}}>
            <h4>Team Meet Score Table</h4>
        </div>
    )
}

export default MeetTable

const makeInitialMeetArray = (mode) =>{
    let numRows, numColumns;

    // Determine the number of rows and columns based on the mode
    if (mode === 'duel') {
      numRows = 2;
      numColumns = 4;
    } else if (mode === 'triangular' || mode === 'quad') {
      numRows = 3;
      numColumns = 4;
    } else {
      // Handle invalid mode
      throw new Error('Invalid mode');
    }
  
    // Create the 2D array and initialize it with zeros
    const meetArray = Array.from({ length: numRows }, () => Array(numColumns).fill(0));
  
    return meetArray;
}

const updateMeetArray = (meetArray, data) => {
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i].length; j++) {

        //seeing which row/col to add data to
        const teamNumber = data[i][j]['teamNumber']
        var row = 0
        if(teamNumber === 'team1'){
            row = 0
        }else if(teamNumber === 'team2'){
            row = 1
        }else if(teamNumber === 'team3'){
            row = 2
        }else if(teamNumber === 'team4'){
            row = 3
        }
        const performanceName = data[i][j]['performanceName']
        var col = 0
        if(performanceName === 'Vault'){
            col = 0
        }else if(performanceName === 'Bar'){
            col = 1
        }else if(performanceName === 'Beam'){
            col = 2
        }else if(performanceName === 'Floor'){
            col = 3
        }

        const score = data[i][j]['score'] ? data[i][j]['score'] : null
        
        if(score){
            meetArray[row][col] += parseInt(score)
        }
    }
  }

  return meetArray;
};

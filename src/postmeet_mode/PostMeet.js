import { useLocation } from "react-router-dom/cjs/react-router-dom.min"
import { useRef } from "react";
import MeetTable from "../run_mode/MeetTable";
import PlayerTable from "../run_mode/PlayerTable";
import Button from '@mui/material/Button';

const PostMeet = () =>{
    const location = useLocation();
    const receivedData = useRef(location.state?.data || {})
    const data = receivedData.current.data
    const mode = receivedData.current.mode

    const downlaodData = () =>{
        const jsonString = JSON.stringify(data, null, 2); // Convert JSON object to string with formatting

        const blob = new Blob([jsonString], { type: 'application/json' }); // Create a Blob with the JSON data
        const url = URL.createObjectURL(blob); // Create a URL for the Blob
      
        const a = document.createElement('a'); // Create an <a> element
        a.href = url; // Set the href attribute of the <a> element to the Blob URL
        a.download = 'data.json'; // Set the download attribute to the desired file name
      
        document.body.appendChild(a); // Append the <a> element to the document body
        a.click(); // Simulate a click on the <a> element to trigger the download
      
        document.body.removeChild(a); // Remove the <a> element from the document body
        URL.revokeObjectURL(url); // Release the Blob URL
    }

    return (
        <div style={{width:"100%"}}>
        <div style={{height:'70px'}}></div>
            <div style={{display:'flex', alignItems:"center", width:"100%"}}>
                        <h2 style={{textAlign:'center', width:"60%", flexDirection:"row-reverse", display:"flex"}}>PostMeet Mode</h2>
                        <div style={{marginTop:"1%", display:"flex", flexDirection:"row-reverse", width:'50%'}}>
                            <Button variant="contained" color="success" onClick={downlaodData} style={{marginRight:"45px"}}>
                                Download Data
                            </Button>
                        </div>
            </div>
            <h4 style={{textAlign:'center', width:"60%", flexDirection:"row-reverse", display:"flex", marginLeft:"5%"}}>'Note: Lowest Apparatus Score Dropped while calculating team rank -- runMode requirement -- H'</h4>
            <div style={{}}>
                <MeetTable  data={data} mode={mode} ranking={true}/>
                <PlayerTable data={data} mode={mode} ranking={true}/>
            </div>
        </div>
    )
}

export default PostMeet
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { useRef } from "react";
import ArenaScreen from "./ArenaScreen";
import ScoreKeeperScreen from "./ScoreKeeperScreen";

const RunMode  = () =>{
    const location = useLocation();
    console.log(location.state?.finalData)
    const receivedData = useRef(location.state?.finalData || {})
    console.log(receivedData)
    return (
        <div style={{width:"100%"}}>
            <div style={{height:'70px'}}></div>
            <div style={{display:'flex'}}>
                <ArenaScreen receivedData={receivedData}/>
                <ScoreKeeperScreen receivedData={receivedData}/>
            </div>
        </div>
    )
}

export default RunMode
import { useLocation } from "react-router-dom/cjs/react-router-dom.min"
import { useRef } from "react";
import MeetTable from "../run_mode/MeetTable";
import PlayerTable from "../run_mode/PlayerTable";

const PostMeet = () =>{
    const location = useLocation();
    const receivedData = useRef(location.state?.data || {})
    const data = receivedData.current.data
    const mode = receivedData.current.mode

    return (
        <div style={{width:"100%"}}>
            <div style={{height:'70px'}}></div>
            <h2 style={{textAlign:"center"}}>PostMeet Mode</h2>
            <div style={{width:"100%"}}>
                <MeetTable  data={data} mode={mode} ranking={true}/>
                <PlayerTable />
            </div>
        </div>
    )
}

export default PostMeet
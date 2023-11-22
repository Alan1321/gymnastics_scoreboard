import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { useRef } from "react";

const RunMode  = () =>{
    const location = useLocation();
    const receivedData = useRef(location.state?.data || {})
    return (
        <div>This is RunMode</div>
    )
}

export default RunMode
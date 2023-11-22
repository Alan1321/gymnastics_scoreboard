import UploadImage from './UplaodImage';
import { useRef, useEffect } from 'react';

const UploadImages = ({ sendToParent, currentTeam }) =>{

    const allImages = useRef([null, null, null, null, null, null])

    useEffect(()=>{
        allImages.current = [null, null, null, null, null, null]
    }, [currentTeam])

    const ImageData1 = (data) =>{
        allImages.current[0] = data
        sendToParent(allImages.current)
    }
    const ImageData2 = (data) =>{
        allImages.current[1] = data
        sendToParent(allImages.current)
    }
    const ImageData3 = (data) =>{
        allImages.current[2] = data
        sendToParent(allImages.current)
    }
    const ImageData4 = (data) =>{
        allImages.current[3] = data
        sendToParent(allImages.current)
    }
    const ImageData5 = (data) =>{
        allImages.current[4] = data
        sendToParent(allImages.current)
    }
    const ImageData6 = (data) =>{
        allImages.current[5] = data
        sendToParent(allImages.current)
    }

    return (
        <div style={{width:"50%", marginLeft:'10px'}}>
            <h3 style={{textAlign:"center"}}>Select Player's Pictures</h3>
            <div style={{width:"100%", marginLeft:'20px', height:"40%", display:'flex', marginBottom:"10px"}}>
                <UploadImage sendToParent={ImageData1} label="Add Photo for Player1 +"/>
                <UploadImage sendToParent={ImageData2} label="Add Photo for Player2 +"/>
                <UploadImage sendToParent={ImageData3} label="Add Photo for Player3 +"/>
            </div>
            <div style={{width:"100%", marginLeft:'20px', height:"40%", display:'flex'}}>
                <UploadImage sendToParent={ImageData4} label="Add Photo for Player4 +"/>
                <UploadImage sendToParent={ImageData5} label="Add Photo for Player5 +"/>
                <UploadImage sendToParent={ImageData6} label="Add Photo for Player6 +"/>
            </div>
        </div>
    )
}

export default UploadImages

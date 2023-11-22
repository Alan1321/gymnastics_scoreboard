import UploadImage from './UplaodImage';

const UploadImages = ({ sendToParent }) =>{

    const allImages = [null, null, null, null, null, null]

    const ImageData1 = (data) =>{
        allImages[0] = data
        sendToParent(allImages)
    }
    const ImageData2 = (data) =>{
        allImages[1] = data
        sendToParent(allImages)
    }
    const ImageData3 = (data) =>{
        allImages[2] = data
        sendToParent(allImages)
    }
    const ImageData4 = (data) =>{
        allImages[3] = data
        sendToParent(allImages)
    }
    const ImageData5 = (data) =>{
        allImages[4] = data
        sendToParent(allImages)
    }
    const ImageData6 = (data) =>{
        allImages[5] = data
        sendToParent(allImages)
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

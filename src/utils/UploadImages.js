import UploadImage from './UplaodImage';

const UploadImages = ({  }) =>{

    const allImages = [null, null, null, null, null, null]

    const ImageData1 = (data) =>{
        allImages[0] = data
    }
    const ImageData2 = (data) =>{
        allImages[1] = data
    }
    const ImageData3 = (data) =>{
        allImages[2] = data
    }
    const ImageData4 = (data) =>{
        allImages[3] = data
    }
    const ImageData5 = (data) =>{
        allImages[4] = data
    }
    const ImageData6 = (data) =>{
        allImages[5] = data
    }

    return (
        <div style={{width:"50%", marginLeft:'10px'}}>
            <h3 style={{textAlign:"center"}}>Select Player's Pictures</h3>
            <div style={{width:"100%", marginLeft:'20px', height:"40%", display:'flex', marginBottom:"10px"}}>
                <UploadImage sendToParent={ImageData1}/>
                <UploadImage sendToParent={ImageData2}/>
                <UploadImage sendToParent={ImageData3}/>
            </div>
            <div style={{width:"100%", marginLeft:'20px', height:"40%", display:'flex'}}>
                <UploadImage sendToParent={ImageData4}/>
                <UploadImage sendToParent={ImageData5}/>
                <UploadImage sendToParent={ImageData6}/>
            </div>
        </div>
    )
}

export default UploadImages

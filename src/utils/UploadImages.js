import Button from '@mui/material/Button';
import { useState, useRef } from 'react';

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
        <div style={{width:"50%", marginLeft:'20px'}}>
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


const UploadImage = ({ sendToParent }) => {

    const inputRef = useRef(null);
    const [image, setImage] = useState("");

    const handleImageChange = (event) => {
        setImage(event.target.files[0])
        sendToParent(event.target.files[0])
    }

    return (
        <div style={{ height: '250px', backgroundColor: 'white', marginRight: '10px', width: '100%' }}>
            {image ? 
            <img src={URL.createObjectURL(image)}
                alt="No Profile"
                style={{ width: '100%', height: '75%', objectFit: 'cover' }}
            /> 
            : 
            <img
                src={process.env.PUBLIC_URL + '/no_profile.png'}
                alt="No Profile"
                style={{ width: '100%', height: '75%', objectFit: 'cover' }}
            />}
            <Button variant="contained" color="info" style={{width:'100%', fontWeight:"bold"}} onClick={()=>inputRef.current.click()}>
                Add Photo +
            </Button>
            <input type="file" ref={inputRef} onChange={handleImageChange} style={{display:'none'}} />
        </div>       
    )
}
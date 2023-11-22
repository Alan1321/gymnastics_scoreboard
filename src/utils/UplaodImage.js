import Button from '@mui/material/Button';
import { useState, useRef } from 'react';

const UploadImage = ({ sendToParent, image_url, label }) => {

    const inputRef = useRef(null);
    const [image, setImage] = useState("");

    const final_image_url = image_url ? image_url : "/no_profile.png"
    const final_label = label ? label : "Add Photo +"

    const handleImageChange = (event) => {
        setImage(event.target.files[0])
        sendToParent(event.target.files[0])
    }

    return (
        <div style={{ height: '100%', backgroundColor: 'white', marginRight: '10px', width: '100%', minHeight:"200px" }}>
            {image ? 
            <img src={URL.createObjectURL(image)}
                alt="No Profile"
                style={{ width: '100%', height: '75%', objectFit: 'cover' }}
            /> 
            : 
            <img
                src={process.env.PUBLIC_URL + final_image_url}
                alt="No Profile"
                style={{ width: '100%', height: '75%', objectFit: 'cover' }}
            />}
            <Button variant="contained" color="info" style={{width:'100%', fontWeight:"bold"}} onClick={()=>inputRef.current.click()}>
                {final_label}
            </Button>
            <input type="file" ref={inputRef} onChange={handleImageChange} style={{display:'none'}} />
        </div>       
    )
}

export default UploadImage
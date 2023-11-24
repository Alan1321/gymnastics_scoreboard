const ShowImage = ({ file }) =>{

    return (
        <div style={{backgroundColor: 'white', marginRight: '10px', width:"250px", height:"250px"}}>
            {file ? 
            <img src={URL.createObjectURL(file)}
                alt="No Profile"
                style={{ width: '100%', height: '75%', objectFit: 'cover' }}
            /> 
            : 
            <img
                src={process.env.PUBLIC_URL + "/no_profile.png"}
                alt="No Profile"
                style={{ width: '100%', height: '75%', objectFit: 'cover' }}
            />}
        </div>  
    )
}

export default ShowImage
import React, { useState } from 'react'

const Upload = () => {
    const [image, setImage]=useState(null);
     const onsubmit= (e)=>{
        if(e.target.files[0]){
            setImage(e.target.files[0])
        } 
     }

     const changeData=()=>{
         console.log(image.name)
     }
  return (
    <div>
        <input type="file" onChange={onsubmit}/>
        <button onClick={changeData}>UPLOAD</button>

    </div>
  )
}

export default Upload
import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
// import { Navigate } from 'react-router-dom'
import storage from './firebase';
import Home from './Home';
// import firebase from 'firebase';
const Admin = () => {
  const navigate = useNavigate()
  const [mobile, Setmobile] = useState("")
  const [model, Setmodel] = useState("")
  const [price, setprice] = useState("")
   const [file,setFile]=useState(null)

  // const [image, setImage] = useState(null);
  const onsubmit = (e) => {
    e.preventDefault();
    if (e.target.files[0]) {
      setFile(e.target.files[0])
    }
  }

  //  const changeData=(e)=>{
  //    e.preventDefault();

  //  }
  const postingdata = (e) => {
    e.preventDefault()
    setFile(file)

    axios.post("https://react-project-2e7b8-default-rtdb.firebaseio.com/mobileinfo.json", {
      mobile: mobile,
      model: model,
      price: price,
        file:file

    }).then(res => { console.log(res.data) })
    const uploadtask = storage.ref(`images/${file.name}`).put(file);
    uploadtask.on("state_changed",
      snapshot => { },
      error => {
        console.log(error);
      },
      () => {
        storage.ref("images").child(file.name).getDownloadURL().then(url => {
          console.log(url);
          setFile(url)
        })
      }
    );

    navigate('/home')




  }

  //  useEffect(() => {
  //    axios.get('gs://react-project-2e7b8.appspot.com/images').then((resp)=>console.log(resp,"ejeekjekjekj"))


  //  }, [])


  // const FileData=(e)=>{
  //     console.log(e.target.file);
  //     setFile(URL.createObjectURL(e.target.file[0]));
  // }
  //   const   onImageChange = event => {

  //           let img = event.target.files[0];
  //           setFile(
  //             URL.createObjectURL(img)
  //           );
  //           }      

  //             if (event.target?.files[0]) {
  //               const reader = new FileReader();
  //               reader.onload = (e) => {
  //                 const image = new Image();
  //                 image.src = e.target.result;
  //                 image.onload = (rs) => {
  //                   const imgBase64Path = e.target.result;
  //                   file.imagepath = imgBase64Path;
  //                   return imgBase64Path
  //                 };
  //               };
  //             console.log(reader.readAsDataURL(event.target.files[0]));
  //             }
  //           }


  return (
    <div>
      <div class="col d-flex justify-content-center" >
        <div className='card display'>
          <div className='card-header'><b>Add Product Here</b></div>
          <form >
            <div className='card-body'>
              <div>
                <label>Mobile</label>
                <input type="text" onChange={(e) => Setmobile(e.target.value)} name="mobile" placeholder="please enter product name" className='form-control' />
              </div>
              <div>
                <label>Model</label>
                <input type="text" onChange={(e) => Setmodel(e.target.value)} name="model" placeholder="please enter product name" className='form-control' />
              </div>
              <div>
                <label>price</label>
                <input type="text" onChange={(e) => setprice(e.target.value)} name="price" placeholder="please enter product name" className='form-control' />
              </div>
              <div>
                <label>Image</label>
                <input type="file" onChange={onsubmit} name="file" className="form-control" />
                {/* <button onClick={changeData}>UPLOAD</button> */}

              </div>
              <div className='buttondisplay'>
                <button type='button' onClick={postingdata} className='btn btn-primary'>Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
      {/* <Home  url={file}/> */}
    </div>
  )
}

export default Admin
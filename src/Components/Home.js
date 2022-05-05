import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
 import { useNavigate } from 'react-router-dom';
import { ADDORDER } from '../Actions';
import Pagesdata from './Pagesdata';
import { FaShoppingCart } from "react-icons/fa";
// import { Link } from 'react-router-dom';

const Home = ({ADDORDER,count}) => {
   

      const navigate=useNavigate
    const [data, setData] = useState([]);
    const [info, setInfo] = useState('');
    // const [username,setUsername]=useState([]);
  const  user=localStorage.getItem("username")
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);
    

    useEffect(() => {
        axios.get("https://react-project-2e7b8-default-rtdb.firebaseio.com/mobileinfo.json", {
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json"
            }
        }).then(resp => {


            const data1 = Object.values(resp.data)
            console.log(data1)
            setData(data1)
            // const display = data1.map(dat => {
            //     console.log(dat.file)
            // })
            // const dispalydata = display.getDownloadURL();
            // console.log(dispalydata)
            // console.log(Promise.all(dispalydata));

            //   console.log(resp.data) 
            // console.log(data)
            //  const data2=Object.values(resp.data)
            //setInfo(data2)
        })

    }, [])

    const  orderdata =async(file,mobile,model,price)=>{
       await  ADDORDER(file,mobile,model,price)

    }
    const moveTOorderspage=()=>{
        navigate('/orders')
    }
    // const changeData=(data2)=>{
    //      setData(data2)
    // }

    //     const fetchdata = () => {
    //         axios.get("https://react-project-2e7b8-default-rtdb.firebaseio.com/mobileinfo.json").then(resp => {


    //             const data1 = Object.values(resp.data)
    //             //    console.log(data1)
    //             setData(data1)
    //             const display = data1.map(dat => {
    //                 console.log(dat.file)
    //             })
    //         const dispalydata = display.getDownloadURL();
    //             console.log(dispalydata)
    //           return Promise.all(dispalydata);

    //     })
    // }

    // const urls =  fetchdata()
    // setData(urls);
    // console.log("inside .then() ", urls)

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);
    const paginate = pageNumber => setCurrentPage(pageNumber);
    return (
        <div>
            

            <h1 className='welcomeName'>Welcome {user}!</h1>
            <div className='float-right'>
                <button className='carttop' onClick={()=>moveTOorderspage}>
                    <span className='badge'><FaShoppingCart style={{height:"40px",width:"60px"}}/><b className='bagdenumber'>{count}</b></span></button>
            </div>
            <label><b>search :</b></label>
            <input type="text" placeholder="search here" value={info} onChange={e => setInfo(e.target.value)} />
            <div>
                {/* <div className='container'>
                    <div className='row'>
                        {info.filter((post) => {
                            return  post.value.toLocaleLowerCase().includes(data.toLocaleLowerCase())}).map((display,i)=>(
                            <div className='col-md-4' style={{ padding: "5px" }}>
                                <div className='card' style={{ height: "25rem", width: "18rem", padding: "3px" }}>
                                    <img src={display.file}  key={i} className="card-img-top imag" />
                                    <div className='card-body'>
                                        <h5 className='card-title'><b>Company:</b>{display.mobile}</h5>
                                        <div className='card-text'><b>Model:</b>{display.model}</div>
                                        <div className='card-text'><b>RS:</b>{display.price}</div>
                                        <button className='btn btn-info'>Order</button>
                                    </div>
                                </div>
                            </div>))
                              })
                    </div>
            </div> */}

                <center>

                    <div className='container'>
                        <div className='row'>
                        {currentPosts.length > 0 &&
                                currentPosts.filter((val) => {
                                        return (
                                            val.mobile.toLowerCase().includes(info.toLowerCase())
                                        )
                                    }).map((item, i) => (
                                       
                                        <div className='col-md-6' style={{padding:"5px"}} >
                                        
                                            <div className='card' style={{ height: "25rem", width: "18rem", padding: "3px" }} key={item.id}>
                                                <img src={item.file} key={i} className="card-img-top imag" />
                                                <div className='card-body'>
                                                    <h5 className='card-title'><b>Company:</b>{item.mobile}</h5>
                                                    <div className='card-text'><b>Model:</b>{item.model}</div>
                                                    <div className='card-text'><b>RS:</b>{item.price}</div>
                                                    <button className='btn btn-info' onClick={()=>orderdata(item.file,item.mobile,item.model,item.price)}>Order</button>
                                                </div>
                                            </div>
                                            
                                        </div>
                                        ))}
                                      
                                    
                        </div>

                    </div>
                </center>
              
                </div>
                  {/* <Posts posts={currentPosts}  /> */}
     
            <Pagesdata
         postsPerPage={postsPerPage}
           totalPosts={data.length}
          paginate={paginate}
      />
        </div>
    )
}
const mapStateToProps= state =>({
     count:state.Orderreducer.length
     
}) 

export default  connect(mapStateToProps,{ADDORDER})(Home);
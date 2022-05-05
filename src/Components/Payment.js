import React, {useState} from 'react';
import { connect } from 'react-redux';
import { FaGooglePay,FaCcMastercard,FaCcAmazonPay} from "react-icons/fa";

const Payment = ({buyItems }) => {
    let [list, setList] = useState(buyItems);
    // console.log(listdata)
    return (
        <div>
            <h1 className='headingcenter'>Order info</h1>
            <div className='container'>
                
                <div className='row'>
                    {buyItems.map((data, i) => (
                        <div className="col-md-4" style={{ padding: "5px" }}>
                            <div className="card" style={{ width: "18rem", height: "26rem" }}>
                                <img src={data.file} key={i} class="card-img-top" alt="noimage" />
                                {/* <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div> */}
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">{data.mobile}</li>
                                    <li className="list-group-item">{data.model}</li>
                                    <li className="list-group-item">{data.price}</li>
                                </ul>
                                {/* <div className="card-body">
                            <a href="#" className="card-link">Card link</a>
                            <a href="#" className="card-link">Another link</a>
                        </div> */}
                            <div class="card-footer">
                                <div className='row'>
                                <FaGooglePay className='col' style={{height:"50px", width:"50px"}}/>
                                <FaCcMastercard className='col' style={{height:"50px", width:"50px"}}/>
                                <FaCcAmazonPay className='col' style={{height:"50px", width:"50px"}}/>
                                </div>
                            </div>
                            </div>
                            
                        </div>
                       
                    ))}
                      

                </div>
            </div>
        </div>
    )
}
const mapStateToProps = state => ({
    buyItems:state.Orderreducer

})

export default connect(mapStateToProps)(Payment)
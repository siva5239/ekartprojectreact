import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { BUYORDER, DELORDER } from '../Actions';
import { useNavigate } from 'react-router-dom';
// import Payment from './Payment';
const Orders = ({ DELORDER, BUYORDER, listdata, count }) => {
  let [list, setList] = useState(listdata);
  const [pay, setPay] = useState([])
  const navigate = useNavigate()



  const deletedata = async (file, mobile, model, price) => {
    await DELORDER(file, mobile, model, price)
    setList(list.filter((x) => x.model !== model))
  }
  const GotoPaymentMode = async (file, mobile, model, price) => {

    await BUYORDER(file, mobile, model, price)
    navigate('/payment')
  }
  // useEffect(()=>{
  //   setList(listdata)
  // })
  // console.log(listdata)
  return (
    <div>
      <center>
        {list.length > 0 ?
          <div className='container'>

            <div className='row'>

              {list.map((item, i) => (
                <div className='col-md-6' style={{ padding: "5px" }} key={item.i}>
                  <div className='card' style={{ height: "25rem", width: "18rem", padding: "3px" }}>
                    <img src={item.file} key={i} className="card-img-top imag" />
                    <div className='card-body'>
                      <h5 className='card-title'><b>Company:</b>{item.mobile}</h5>
                      <div className='card-text'><b>Model:</b>{item.model}</div>
                      <div className='card-text'><b>RS:</b>{item.price}</div>
                      <div className='row '>
                        <button className='btn btn-warning col' onClick={() => GotoPaymentMode(item.file, item.mobile, item.model, item.price)}><b>Buy</b></button>
                        <button className='btn btn-danger col' onClick={() => deletedata(item.file, item.mobile, item.model, item.price)}>Delete</button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>


          </div>
          :
          <div>
            <h4>No Orders Placed</h4>
          </div>}
      </center>

      {/* <Payment listdata={list}/> */}

    </div>
  )
}
const mapStateToProps = state => ({
  listdata: state.Orderreducer,
  buyItems:state.Orderreducer

})
export default connect(mapStateToProps, { DELORDER, BUYORDER })(Orders)
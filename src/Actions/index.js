export   const  ADDORDER=(file,mobile,model,price)=> async dispatch =>{
    dispatch({
        type:"Addorder",
        payload:{
           file:file,
           mobile:mobile,
           model:model,
           price:price,
         
        }
    })

}

export   const  DELORDER=(file,mobile,model,price)=> async dispatch =>{
    dispatch({
        type:"Delorder",
        payload:{       
            file:file,
            mobile:mobile,
            model:model,
            price:price,
        }
    })

}


export   const  BUYORDER=(file,mobile,model,price)=> async dispatch =>{
    dispatch({
        type:"Buyorder",
        payload:{       
            file:file,
            mobile:mobile,
            model:model,
            price:price,
        }
    })

}








    
const initialState=[]

export default function Orderreducer(state=initialState,action){
     const{type,payload}=action;
     switch (type) {
         case "Addorder":
           return [...state,payload]
          case "Delorder":
            return state.filter((x)=> x.model!==payload.model)

          case "Buyorder":
               state=[]
              return [...state, payload]
              
         
         default:
             return state
     }
}
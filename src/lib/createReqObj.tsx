import { ReqObj, BodyObj } from "../types/interface";

//relay flag is used for when we use 
const createReqObj = (method: string, req: BodyObj, relay:boolean = false): ReqObj => (

  {
  method,
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(req),
});


export const createGetObj = (): ReqObj =>({
  method:'GET',
  headers:{
    "Content-Type": "application/json"
  }

})

// export const relayObj = (strReqObj: string): ReqObj =>{

// }

export default createReqObj;

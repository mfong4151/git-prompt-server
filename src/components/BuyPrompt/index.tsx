"use client"

import React, { FC, useState } from 'react'
import BuyTerminal from './BuyTerminal'
import CallOutput from './CallOutput'
import useErrors from '@/hooks/useErrors'
import createReqObj, { createGetObj } from '@/lib/createReqObj'

//Delete after Nishant takes over:
import './temp.css'

export  interface Props{
  promptId: number
  insertDescs: string[]
}

const handleAdLibErrors = (adLibs:string[], expectedLibs: number): [boolean, string[]] =>{
  const newErrors:string[] = [];

  const numUnedited: number = adLibs.filter((s) => {s === ""}).length;

  if (numUnedited){ 
    newErrors.push('Some of your variables are unedited! Please fill them in')

  } 

  return [newErrors.length > 0, newErrors]; 
}



const BuyPrompt: FC<Props> = ({promptId, insertDescs}) => {
    const [callOutput, setCallOutput] = useState<string>('')
    const [adLibs, setAdLibs] = useState<string[]>(Array(insertDescs.length).fill(''))
    const [errors, setErrors, clearErrorsEffect] = useErrors()

    //Temporary testing variables
    const userId: number = 1;

    const handleOnClick = async(e: any):Promise<void> =>{
      const [hasErrors, newErrors] = handleAdLibErrors(adLibs, adLibs.length)

      if (hasErrors){
        setErrors(newErrors)
        return
        
      } 

      //Balance checking needs to happen here


      const postObj = {prompt_id: promptId, 
                       user_id:userId, 
                       inserts: adLibs}
      

      const res = await fetch('http://localhost:8000/buy_prompt/buy', createReqObj( "POST", postObj))
      const data = await res.json()
      console.log(data)
      if (res.ok) setCallOutput(data['msg'])
    
    }
    
    clearErrorsEffect([callOutput, adLibs])

    return (
    <div className='ude'>

      <CallOutput callOutput={callOutput}/>      
      <BuyTerminal insertDescs={insertDescs} adLibsState={{adLibs, setAdLibs}} handleOnClick={handleOnClick}/>
      {errors.length && <p>{errors}</p>}
    </div>
  )
}

export default BuyPrompt



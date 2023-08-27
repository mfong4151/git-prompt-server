"use client"

import React, {FC} from 'react'
import './temp.css'
import { StateSetter } from '@/types/types'

interface Props{
  callOutput:string
}
const CallOutput: FC<Props> = ({callOutput}) => {

  return (
    <div className='pannels buy-terminal'>
      {callOutput}    
    </div>
  )
}

export default CallOutput

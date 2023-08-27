"use clienbt"
import { StateSetter } from '@/types/types'
import React, { FC } from 'react'

interface Props{
    desc: string
    adLibsState:{ 
        adLibs:string[]
        setAdLibs:StateSetter<string[]>
      }
    idx: number
}

const FillInsertItem: FC<Props> = ({desc, adLibsState, idx}) => {

  const {adLibs, setAdLibs} = adLibsState;

  const handleOnChange = (e: any) =>{
    e.stopPropagation()
    e.preventDefault()

    const newAdLibs = [...adLibs];
    newAdLibs[idx] = e.target.value;
    setAdLibs(newAdLibs)    
  }

  return (
    <div>
        <h3>{desc}</h3>
        <input className="insert" value={adLibs[idx]} onChange={handleOnChange}/>
      
    </div>
  )
}

export default FillInsertItem

"use client"

import React, {FC} from 'react'
import FillInsertItem from './FillInsertItem'
import { StateSetter } from '@/types/types'

interface Props{
  insertDescs: string[]
  adLibsState:{ 
                adLibs:string[]
                setAdLibs:StateSetter<string[]>
              }
  handleOnClick:(e:any) => void
}

//We should create something to estimate costs here
//We need something to prevent the buyer from buying again and blowing out their previous purchase without warning

const BuyTerminal: FC<Props> = ({insertDescs, adLibsState, handleOnClick}) => {



  return (
    <div className='udc pannels'>

      <div>
        <form>
            {insertDescs.map((desc, idx)=> 
              <FillInsertItem key={idx} desc={desc} adLibsState={adLibsState} idx ={idx} />
            )}
        </form>


      </div>

      <button onClick={handleOnClick}>
        Buy!
      </button>
    </div>
  )
}

export default BuyTerminal

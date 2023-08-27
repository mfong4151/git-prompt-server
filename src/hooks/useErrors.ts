import { StateSetter } from '@/types/types'
import React, {useState, useEffect} from 'react'

type ErrorsHook = [string[], StateSetter<string[]>, (dependencies: any[]) => void ]


const useErrors = () : ErrorsHook => {
    const [errors, setErrors] = useState<string[]>([])

    const clearErrorsEffect = (dependencies: any[])=> (

        useEffect(()=>{
            setErrors([])
        }, dependencies)
    
    )

    


  return [errors, setErrors, clearErrorsEffect]
}

export default useErrors

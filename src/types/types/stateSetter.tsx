import React from 'react'

//Because typing out this shit is annoying af
export type StateSetter<T> = React.Dispatch<React.SetStateAction<T>>

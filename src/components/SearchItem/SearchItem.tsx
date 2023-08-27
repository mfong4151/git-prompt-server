import Link from 'next/link'
import React, { FC } from 'react'

interface Props{
    prompt:{
        id: number
        title: string
        desc: string
        price: number
  
    }
}

const SearchItem: FC<Props> = ({prompt}) => {
    const {id, title, desc, price} = prompt;

  return (
    <li>
        <Link href={`/showprompt/${id}`}>{title}</Link>
        <p>{desc}</p>
    </li>
  )
}

export default SearchItem

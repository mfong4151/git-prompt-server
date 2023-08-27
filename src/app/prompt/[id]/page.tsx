import BuyPrompt from '@/components/BuyPrompt'
import { getPrompt } from '@/db'
import React, { FC } from 'react'

// select: {
//   ?   id?: true,
//   ?   authorId?: true,
//   ?   title?: true,
//   ?   desc?: true,
//   ?   inserts?: true,
//   ?   insertIdxs?: true,
//   ?   insertDescs?: true,
//   ?   body?: true,
//   ?   categories?: true,
//   ?   price?: true,
//   ?   apiName?: true,
//   ?   liveListing?: true,
//   ?   views?: true,
//   ?   purchases?: true,
//   ?   displayPhotos?: true,
//   ?   author?: true,
//   ?   promptPurchased?: true,
//   ?   promptsComments?: true,
//   ?   _count?: true


interface Props{
  params:{
    id: string
  }
}


//Very unfinished, should be a formal listing for the prompt   

const ShowPrompt: FC<Props> = async({params}) => {

    const prompt = await getPrompt(parseInt(params.id))

    const {id, title, desc, inserts,  insertDescs,  price,  liveListing,  apiName,  categories} = prompt!
    

    //Needs livelisting as a safety to make sure that unlisted prompts dont go live.
    return (
    <>
      {
        // liveListing &&
        <div>
          <h1>{title}</h1>
          <p>Description: {desc}</p>
          <p>Categories: {categories}</p>
          <div id='inserts'> 
            {Object.values(inserts).map((insert, idx) => <p key={idx}>{insert}</p>)}
          </div>

          <h2>Fill out your inserts</h2>
          <BuyPrompt promptId={id} insertDescs={insertDescs}/>
          <div> 

          </div>


          <p>Price: {price}</p>
          <p>AI: {apiName}</p>
      </div>
      }

    </>
  )
}

export default ShowPrompt 

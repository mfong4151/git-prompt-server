import { prisma } from '@/db/db';


export const getPrompt = (promptId:number) =>(
    prisma.prompt.findUnique({
        select:{
          id:true,
          title:true,
          desc:true,
          inserts: true,
          insertDescs: true,
          price: true,
          liveListing: true,    
          displayPhotos: true,
          apiName: true,
          categories:true,
        },
        where:{ id: promptId}
      })

)

     

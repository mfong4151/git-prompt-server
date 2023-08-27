import { DelObj, PatchObj, PostObj } from "@/types/interface"
import { insertions } from "@/types/types"

export const createPostObj = (authorId: number,
                             title: string,
                             desc: string,
                             inserts: insertions,
                             categories: string[],
                             body:string,
                             price:number,
                             isLive:boolean,
                             displayPhotos:string[], 
                             apiName: string,
                             displayVideos:string = ''
                            ): PostObj =>(
    {
        authorId,
        title,
        desc: desc,
        inserts,
        body,
        price,
        categories,
        liveListing: isLive,
        displayPhotos,
        apiName,
        ...(displayVideos && { displayVideos }),
    });

export const createPatchObj = (
                                authorId: number,
                                title: string,
                                desc: string,
                                inserts:insertions,
                                categories: string[],
                                body:string,
                                price:number,
                                isLive:boolean,
                                displayPhotos:string[],
                                apiName:string,
                                promptId:number,
                                displayVideos:string = '', 
                             ): PatchObj => 
({
    ...createPostObj(authorId, title, desc, inserts, categories, body, price, isLive, displayPhotos, apiName),
    promptId,
    ...(displayVideos && { displayVideos })
})



export const createDelObj = (promptId: number):DelObj =>(
    {
        promptId
    }
)
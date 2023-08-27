import { insertions } from "../types";

export interface PostObj {
    authorId: number;
    title: string;
    desc: string;
    categories: string[];
    inserts: insertions;
    body: string;
    price: number;
    liveListing: boolean;
    displayPhotos: string[];
    apiName: string;
    displayVideos?: string;
  }
  
export interface PatchObj extends PostObj {
    promptId: number;
  }

export interface DelObj {
  promptId : number;
}
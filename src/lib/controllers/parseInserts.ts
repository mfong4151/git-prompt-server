import { insertions } from "@/types/types";

interface InsertionArrays{
    insertIdxs: number[];
    insertNames: string[];
    insertDescs: string[]; 
}


const parseInserts =(inserts: insertions): InsertionArrays  => {
    const insertIdxs: number[] = [];
    const insertNames: string[] = [];
    const insertDescs: string[] = [];
  
    Object.values(inserts).forEach(({ idx, varName, desc }) => {
      insertIdxs.push(idx);
      insertNames.push(varName);
      insertDescs.push(desc);
    });
  
    return {
      insertIdxs,
      insertNames,
      insertDescs
    };
  }

export default parseInserts;
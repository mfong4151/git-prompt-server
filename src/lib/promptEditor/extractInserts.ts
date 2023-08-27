import { InsertOptions } from "@/types/interface/InsertOptions";
import { insertions } from "@/types/types";
import {DELIMITER_FR, DELIM_FR_LEN} from "./constants"
// splice name from string inserted
// attach the default description  

const createInsertOption = (i: number, s: string): InsertOptions => {
    const varName:string = s.slice(DELIM_FR_LEN, s.lastIndexOf('}'));
    const adLib: string = `Create a ad lib clue for ${varName}`;
    const desc:string = `Create a description for ${varName}`;
    return {
      idx: i,
      varName,
      desc,
    };
  };
  

const extractInserts = (promptBody:string):insertions => {
    const newInsertions: insertions = {};
    const splitBody: string[] = promptBody.split(' ')
    for (let i: number = 0; i < splitBody.length; i ++) {
          const s = splitBody[i];
          const newInsert = createInsertOption(i, s);
          newInsertions[s.slice(DELIM_FR_LEN, s.length -2)] = newInsert;
        }
      
    
      return newInsertions;
}



//Need to change



export default extractInserts;
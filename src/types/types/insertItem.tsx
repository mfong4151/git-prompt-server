//Refers to the structure of the item sent in for inserts, 
//Takes the insertion's name, and hashes it to the sub-field we want to display to the user

import { InsertOptions } from "../interface/InsertOptions";

//The reason for the pipe operator is because we need to convert it to have less keys before sending it to the backend
// see extractInserts.ts
export type insertions = {[key: string]: InsertOptions}

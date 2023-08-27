//index: if we had split the prompt, and inserted the string at "index" then thats where it would be inserted
//variableName: What our user has decided to name the variable
// desc: How the user wants to describe the item 

export interface InsertOptions{
    idx: number
    varName:string
    desc: string
}
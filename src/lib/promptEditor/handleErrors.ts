import { insertions, StateSetter } from "@/types/types";
import { DEFAULT_INSERT_DESC } from "./constants";

export const handleListingErrors = (
  title: string,
  desc: string,
  price: number,
  category: string[],
  body: string,
  inserts: insertions,
  apiName: string,
  setErrors: StateSetter<string[]>
): boolean => {
  const newErrors: string[] = [];



  const mapErrors = {
    'Title is required': title.trim() === '',
    'Description is required': desc.trim() === '',
    'Price must be a valid number': isNaN(price),
    'At least one category is required': !category.length,
    'Body is required': body.trim() === '',
    'Please select a generative AI provider': !apiName
  }
  

  for(const[err, isErr] of Object.entries(mapErrors)) if(isErr) newErrors.push(err)

  //handle inserts errors here

  for(const [insert, options] of Object.entries(inserts)){
      const desc: string = options.desc;
      if (desc.slice(0, desc.lastIndexOf(' ')) === DEFAULT_INSERT_DESC){
         newErrors.push(`Please add a description how your buyers should interact with ${insert}`)
      }
  }

  setErrors(newErrors);
  return newErrors.length > 0
}

export const handleCategoryErrors = (category: string, categories:string[], setErrors:StateSetter<string[]>): boolean =>{
  const newErrors:string[] = [];

  if (!category.length){
    newErrors.push('Sorry! Category cannot be blank')
  }
  
  if (categories.includes(category)){
    newErrors.push("This category is already assigned!")
  }
  setErrors(newErrors)
  return newErrors.length > 0;
}
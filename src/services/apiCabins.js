import supabase from "./supabase";

export async function getCabins(){

const { data, error } = await supabase.from('cabins').select('*')

 if(error){
    console.error(error);
    throw new Error("cabins couldn't be loaded")
 }
 return data
}


export async function deleteCabin(cabinId){
const { data, error } = await supabase
.from('cabins')
.delete()
.eq('cabinId', cabinId)
if(error){
   console.error(error);
   throw new Error("cabins couldn't be deleted")
}
return data;
}

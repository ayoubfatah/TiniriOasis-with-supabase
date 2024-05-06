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

   return data;
   }



export async function addCabin(cabinObj){

   const imageName = `${Math.random()}-${cabinObj.image.name}`.replaceAll("/" , "") // so supabase wont create folders cause if there is a / in the name it will create a folder
   const imagePath = `https://abpbmrevqhrumbygedav.supabase.co/storage/v1/object/public/cabin-images/${imageName}`
      // https://abpbmrevqhrumbygedav.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg
   // 1 first creating the cabin
         const { data, error } = await supabase
         .from('cabins')
         .insert([{...cabinObj , image : imagePath }])
         .select()

         if(error){
            console.error(error);
            throw new Error("cabins couldn't be added")
         }   
   // 2 Upload the image 
       const { error: storageError } = await supabase.storage
       .from ( 'cabin-images')
      .upload(imageName , cabinObj.image )
  // 3 delete cabin if there is was an error uploading the image 
  if(storageError){
   await supabase
   .from('cabins')
   .delete()
   .eq('cabinId', data.cabinId);
   console.error(storageError);
   throw new Error("cabins image could't be uploaded and cabin wasn't created ")

  }

   return  data
   
}

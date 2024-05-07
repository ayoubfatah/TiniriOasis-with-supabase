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
   console.log(cabinObj);
   const imageName = `${Math.random()}-${cabinObj.image.name}`?.replaceAll("/" , "") // so supabase wont create folders cause if there is a / in the name it will create a folder
   const imagePath = cabinObj.image?.startsWith?.("https://abpbmrevqhrumbygedav.supabase.co/storage/v1/object/public/cabin-images/") ? cabinObj.image : `https://abpbmrevqhrumbygedav.supabase.co/storage/v1/object/public/cabin-images/${imageName}`
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
   console.log(cabinObj.image?.startsWith?.("https://abpbmrevqhrumbygedav.supabase.co/storage/v1/object/public/cabin-images/"));
if(cabinObj.image?.startsWith?.("https://abpbmrevqhrumbygedav.supabase.co/storage/v1/object/public/cabin-images/"))return
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


// 

export async function editCabin(cabin , id){
   const hasImagePath = cabin.image?.startsWith?.("https://abpbmrevqhrumbygedav.supabase.co")
   const randomInt = Math.floor(Math.random() * 1000000); // Generates a random integer between 0 and 999999
   const imageName = `${randomInt}-${cabin.image.name}`.replaceAll("/", ""); // Combines random integer with image name
   const imagePath = hasImagePath? cabin.image :  `https://abpbmrevqhrumbygedav.supabase.co/storage/v1/object/public/cabin-images/${imageName}` ;  

      // https://abpbmrevqhrumbygedav.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg
   // 1 updating  the cabin
        
         const { data, error } = await supabase
         .from('cabins')
         .update({...cabin , image : imagePath })
         .eq('cabinId',id)
         .select()

         if(error){
            console.error(error);
            throw new Error("cabins couldn't be added")
         }   
   // 2 Upload the image 
       const { error: storageError } = await supabase.storage
       .from ( 'cabin-images')
      .upload(imageName , cabin.image )
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
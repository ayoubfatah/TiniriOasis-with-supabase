import supabase from "./supabase";

export async function login({ email, password }) {
    try {
        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        if (error) {
            console.error('Error during sign in:', error);
            return { success: false, message: error.message };
        }

        return { success: true, data };

    } catch (err) {
        console.error('Unexpected error during sign in:', err);
        return { success: false, message: 'An unexpected error occurred.' };
    }
}



export  async function getCurrentUser(){
  const {data : session} =  await supabase.auth.getSession()
  if(!session.session) return null
// more secure to do this 
  const {data , error} = await supabase.auth.getUser()
  if(error) throw new Error(error.message)
    return data?.user
 }



 export async function logout(){
     const {error} = await supabase.auth.signOut()
    if(error) throw new Error(error.message)
 }


 export async function signup({fullName , email , password }){
    try {
        let { data, error } = await supabase.auth.signUp({
            email,
            password,
            options:{
                data:{
                    fullName,
                    avatar: "",
                },
            }
        });
      
        if (error) {
          throw new Error("Something wrong happened while trying to sign up ");
        }
      } catch (error) {
        console.error("Sign-up error:", error.message);
      }
      
 }

 export async function updateCurrentUser({password,fullName, avatarImg}){
//1 update password or fullName

  let updateData ;
  if(password) updateData:{password}

  // here the way we update full name is different cause of the way we added full name into the user object earlier in the signup function

  if(fullName) updateData:{data:{fullName}}
  const {data,error} =await supabase.auth.updateUser({updateData})
  if(error) throw new Error(error.message)

  if(!avatar) return data
//2 we upload the avatar images 
const fileName = `avatar-${data?.user?.id}-${Math.random()}`

const{error: storageError} =  await supabase.storage.from("avatars").upload(fileName , avatarImg)
if(storageError) throw new Error(storageError.message)

//3. Update the avatar  in the user
  const {data:updatedUser  , error:error2} = await supabase.auth.updateUser({
    data:{
      fullName,
                
      avatar: `https://abpbmrevqhrumbygedav.supabase.co/storage/v1/object/public/avatars/${fileName}`
    }
  })
  if(error2) throw new Error(error2.message)

  return {updatedUser , error2}

 } 
 
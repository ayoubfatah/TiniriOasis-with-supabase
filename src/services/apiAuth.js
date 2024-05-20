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
 
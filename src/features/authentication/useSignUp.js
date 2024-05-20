import { useMutation, useQueries } from "@tanstack/react-query";
import { signup  as signupApi} from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useSignUp(){
   const {mutate :signup, isLoading } = useMutation({
      mutationFn: signupApi,
      onSuccess:(user)=>{
        console.log(user);
        toast.success("user has been successfully created please make sure to verify the account from the user's email address ")

      },
      onError:(err)=>{
        toast.error(err?.message)
      }
   })
   return {signup , isLoading}
}

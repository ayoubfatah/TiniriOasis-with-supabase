import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout} from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";

export function useLogout(){
    const navigate = useNavigate()
   const queryClient = useQueryClient()
const{mutate :logoutFun, isLoading} = useMutation({
    mutationFn: logout,
    onSuccess:()=>{
        //we need  to remove queries from our cash 
        queryClient.removeQueries()
        navigate("/login" ,{replace: true})
    }
})
return {logoutFun , isLoading}
}
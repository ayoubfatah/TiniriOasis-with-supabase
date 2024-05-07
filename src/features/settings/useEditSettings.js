import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateSetting as updateSettingApi } from "../../services/apiSettings";

export default function useEditSettings() {

     
    const queryClient = useQueryClient()
    const {mutate : updateSetting , isLoading:isUpdating}=  useMutation({
     mutationFn : (settings)=> updateSettingApi(settings),
     onSuccess : ()=>{
       toast.success("setting successfully edited  ")
       queryClient.invalidateQueries({queryKey: ["cabins"]});

     },
     onError: (err)=> toast.error(err.message)
   })

   return{isUpdating , updateSetting}

}

import { useMutation, useQueryClient } from '@tanstack/react-query';
import React from 'react'
import { editCabin } from '../../services/apiCabins';
import toast from 'react-hot-toast';

export default function useEditCabin() {
  
    const queryClient = useQueryClient()
    const {mutate  , isLoading:isEditing}=  useMutation({
     mutationFn : ({newCabinData , id})=> editCabin(newCabinData , id),
     onSuccess : ()=>{
       toast.success("cabin successfully edited  ")
       queryClient.invalidateQueries({queryKey: ["cabins"]});

     },
     onError: (err)=> toast.error(err.message)
   })
   return{isEditing , mutate}
}

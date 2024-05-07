import React from 'react'
import toast from 'react-hot-toast';
import { addCabin } from '../../services/apiCabins';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export default function useCreateCabin() {
    const queryClient = useQueryClient()
    const {mutate , isLoading:isInserting}=  useMutation({
     mutationFn : (obj)=> addCabin(obj),
     onSuccess : ()=>{
       toast.success("New cabin has been successfully  created ")
       queryClient.invalidateQueries({queryKey: ["cabins"]});

     },
     onError: (err)=> toast.error(err.message)
   })
   return{mutate , isInserting}
}

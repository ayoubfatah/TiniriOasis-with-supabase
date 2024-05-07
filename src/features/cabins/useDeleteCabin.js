import { useMutation, useQueryClient } from '@tanstack/react-query'
import React from 'react'
import { deleteCabin } from '../../services/apiCabins'
import toast from 'react-hot-toast'

export default function useDeleteCabin() {
    const queryClient = useQueryClient()
    const {isLoading:isDeleting , mutate} = useMutation({
      mutationFn: (cabinId)=>deleteCabin(cabinId),
      onSuccess: ()=>{
        toast.success("cabin has been successfully deleted  ")
        queryClient.invalidateQueries({
          queryKey: ["cabins"]
        })
      },
      onError: err => toast.error(err.message)
    })
    return{isDeleting , mutate}
}

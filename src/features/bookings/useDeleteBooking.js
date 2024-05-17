import { useMutation, useQueryClient } from '@tanstack/react-query'
import React from 'react'
import { deleteCabin } from '../../services/apiCabins'
import toast from 'react-hot-toast'
import { deleteBooking } from '../../services/apiBookings'

export default function useDeleteBooking() {
    const queryClient = useQueryClient()
    const {isLoading:isDeleting , mutate} = useMutation({
      mutationFn: (bookingId)=>deleteBooking(bookingId),
      onSuccess: ()=>{
        toast.success("booking has been successfully deleted  ")
        queryClient.invalidateQueries({
          queryKey: ["bookings"],
        })
      },
      onError: err => toast.error(err.message)
    })
    return{isDeleting , mutate}
}

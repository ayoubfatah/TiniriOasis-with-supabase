import { useMutation, useQueryClient } from '@tanstack/react-query'
import React from 'react'
import { updateBooking } from '../../services/apiBookings'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

export default function useCheckIn() {
     const queryClient = useQueryClient()
     const navigate = useNavigate()
     const {mutate , isLoading} = useMutation({
        mutationFn:(bookingId)=>updateBooking(bookingId ,{
            status:"checked-in",
            isPaid: true,
        }),
        onSuccess:(data)=>{
            queryClient.invalidateQueries({active: true })
            toast.success(`Booking #${data.id} successfully checked in `)
            navigate("/")
        },
        onError:()=> toast.error("there was an error while checking in ")
     })
return {mutate , isLoading}
}

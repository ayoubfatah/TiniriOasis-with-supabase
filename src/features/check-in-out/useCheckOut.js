
import { useMutation, useQueryClient } from '@tanstack/react-query'
import React from 'react'
import { updateBooking } from '../../services/apiBookings'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

export default function useCheckOut() {
     const queryClient = useQueryClient()
     const navigate = useNavigate()
     const {mutate , isLoading} = useMutation({
        mutationFn:(bookingId)=>updateBooking(bookingId ,{
            status:"checked-out"}),
        onSuccess:(data)=>{
            queryClient.invalidateQueries({active: true })
            toast.success(`Booking #${data.id} successfully checked out `)
            navigate("/bookings")
        },
        onError:()=> toast.error("there was an error while checking out ")
     })
return {mutate , isLoading}
}

import { useQuery } from "@tanstack/react-query"
import { getBooking } from "../../services/apiBookings"
import { useParams, useSearchParams } from "react-router-dom"


export default function useBooking() {
    const [searchParams] = useSearchParams()












    // Prefetching 
    const {bookingId} = useParams()
     
    const {isLoading , data:booking  , error } =  useQuery({
        queryKey:["booking"],   // this will uniquely identify the data that we will query 
       queryFn:()=> getBooking(bookingId),   //function that is responsible for fetching (function should return a promise)
        retry:false,
        })

        return {isLoading, booking  , error } 
}

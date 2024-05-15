import { useQuery } from "@tanstack/react-query"
import { getBookings } from "../../services/apiBookings"
import { useSearchParams } from "react-router-dom"

export default function useBookings() {
    const [searchParams] = useSearchParams()

    // Filter
    const filterValue = searchParams.get("status")

    const sortByFromUrl = searchParams.get("sortBy") || "startDate-desc"
    const [field , direction ] = sortByFromUrl.split("-")

    // Pagination
    const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"))

    const sortBy ={field , direction}
    const filter = !filterValue || filterValue === "all" ? null : {field:"status" , value:filterValue , method:"eq"}

    const {isLoading , data , error } =  useQuery({
      
        queryKey:["bookings", filter , sortBy ,page],   // this will uniquely identify the data that we will query 
       queryFn:()=> getBookings({filter , sortBy  ,page})   //function that is responsible for fetching (function should return a promise)

        })
        const {count , data:bookings} = data ?? {}

        return {isLoading,bookings , count , error ,}
}

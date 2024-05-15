import { useQuery } from "@tanstack/react-query"
import { getBookings } from "../../services/apiBookings"
import { useSearchParams } from "react-router-dom"

export default function useBookings() {
    const [searchParams] = useSearchParams()

    // Filter
    const filterValue = searchParams.get("status")

    const sortByFromUrl = searchParams.get("sortBy") || "startDate-desc"
    const [field , direction ] = sortByFromUrl.split("-")

    const sortBy ={field , direction}
    const filter = !filterValue || filterValue === "all" ? null : {field:"status" , value:filterValue , method:"eq"}

    const {isLoading , data : bookings, error } =  useQuery({
        queryKey:["bookings", filter , sortBy],   // this will uniquely identify the data that we will query 
       queryFn:()=> getBookings({filter , sortBy })   //function that is responsible for fetching (function should return a promise)
        })
        return {isLoading , bookings , error}
}

import { useQueries, useQuery } from "@tanstack/react-query";
import { subDays } from "date-fns";
import { useSearchParams } from "react-router-dom";
import { getBookingsAfterDate } from "../../services/apiBookings";
import { getToday } from "../../utils/helpers";

export function useRecentBookings(){
    const [SearchParams] = useSearchParams()
    const numDays = !SearchParams.get("last") ? 7 : Number(SearchParams.get("last"))
    const  queryDate = subDays( new Date(), numDays).toISOString();

    const {isLoading ,data:bookings } = useQuery({
        queryFn: ()=> getBookingsAfterDate(queryDate),
        queryKey: ["bookings" , `Last-${numDays}`]
    })

    return{isLoading , bookings}
}
import { useQueries, useQuery } from "@tanstack/react-query";
import { subDays } from "date-fns";
import { useSearchParams } from "react-router-dom";
import { getBookingsAfterDate, getStaysAfterDate } from "../../services/apiBookings";
import { getToday } from "../../utils/helpers";

export function useRecentStays(){
    const [SearchParams] = useSearchParams()
    const numDays = !SearchParams.get("last") ? 7 : Number(SearchParams.get("last"))
    const  queryDate = subDays( new Date(), numDays).toISOString();

    const {isLoading ,data:stays } = useQuery({
        queryFn: ()=> getStaysAfterDate(queryDate),
        queryKey: ["stays" , `Last-${numDays}`]
    })

    const confirmedStays = stays?.filter(stay => stay.status !== "unconfirmed")
    return{isLoading , stays, confirmedStays}
}
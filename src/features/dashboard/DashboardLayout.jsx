import styled from "styled-components";
import Stats from "./Stats"
import Spinner from "../../ui/Spinner";
import useCabins from "../cabins/useCabins"
import { useRecentBookings } from "./useRecentBookings";
import { useRecentStays } from "./useRecentStays";
import useAllCabins from "../cabins/useAllCabins";
import SalesChart from "./SalesChart";
import DurationChart from "./DurationChart";
import TodayActivity from "../check-in-out/TodayActivity"
const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;




export default function DashboardLayout() {
  const {isLoading:isLoadingBookings , bookings} = useRecentBookings()
  const { stays , isLoading: isLoadingStay,confirmedStays ,numDays} = useRecentStays()
  const {allCabins} = useAllCabins()
   

  if(isLoadingBookings || isLoadingStay ) return <Spinner />
  return (
    <StyledDashboardLayout>
      <Stats bookings={bookings} numDays={numDays} cabinCount={allCabins.data.length} confirmedStays={confirmedStays} />
      <TodayActivity />
      <DurationChart  confirmedStays={confirmedStays}/>
      <SalesChart  bookings={bookings} numDays={numDays}/>
    </StyledDashboardLayout>
  )
}

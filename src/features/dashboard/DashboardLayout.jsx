import styled from "styled-components";
import Stats from "./Stats"
import Spinner from "../../ui/Spinner";
import useCabins from "../cabins/useCabins"
import { useRecentBookings } from "./useRecentBookings";
import { useRecentStays } from "./useRecentStays";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;




export default function DashboardLayout() {
  const {isLoading:isLoadingBookings , bookings} = useRecentBookings()
  const { stays , isLoading: isLoadingStay,confirmedStays ,numDays} = useRecentStays()
  const {data, isLoading: isLoadingCabins} = useCabins()
  console.log(data);
  if(isLoadingBookings || isLoadingStay  || isLoadingCabins) return <Spinner />
  return (
    <StyledDashboardLayout>
      <Stats bookings={bookings} numDays={numDays} cabinCount={data.length} confirmedStays={confirmedStays} />
      <div>Todays activity</div>
      <div>chart for stay duration</div>
      <div>chart of sales </div>
    </StyledDashboardLayout>
  )
}

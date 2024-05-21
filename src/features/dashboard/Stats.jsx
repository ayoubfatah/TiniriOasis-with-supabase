import { HiOutlineBriefcase, HiOutlineChartBar } from "react-icons/hi"
import Stat from "./Stat"
import { HiOutlineBanknotes, HiOutlineCalendarDays } from "react-icons/hi2"
import { formatCurrency } from "../../utils/helpers"

export default function Stats({bookings , confirmedStays , numDays , cabinCount}) {
    //1 number of bookings
    const numOfBookings = bookings?.length

    // 2  total sales
    const totalSales =  bookings.reduce((acc,  curr)=> acc + curr.totalPrice , 0 )
    //3 total check ins 
    const totalCheckins = confirmedStays.length
    //4 OCCUPANCY rate :
    // num checked in nights / all available nights (num days* num cabins)
    // const occupation = confirmedStays.reduce((acc , curr)=>  acc + curr.numNights,0) / (numDays * cabinCount)
    const occupation = "100%"
  return (
    <>
    <Stat icon={<HiOutlineBriefcase />} title={"bookings"} value={numOfBookings} color={"blue"} />
    <Stat icon={<HiOutlineBanknotes />} title={"Sales"} value={formatCurrency(totalSales)} color={"green"} />
    <Stat icon={<HiOutlineCalendarDays/>} title={"Check ins "} value={totalCheckins} color={"indigo"} />
    <Stat icon={<HiOutlineChartBar />} title={"OCCUPANCY RATE"} value={occupation} color={"yellow"} />
    </>
  )
}

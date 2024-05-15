import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import {getCabins} from "../../services/apiCabins"
import Spinner from "../../ui/Spinner";
import CabinRow from "../../features/cabins/CabinRow"
import useCabins from "./useCabins";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import { useSearchParams } from "react-router-dom";
import Cabins from "../../pages/Cabins";
import Empty from "../../ui/Empty";




const TableHeader = styled.header`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;

  background-color: var(--color-grey-50);
  border-bottom: 1px solid var(--color-grey-100);
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  color: var(--color-grey-600);
  padding: 1.6rem 2.4rem;
`;




export default function CabinTable() {

  const {isLoading , cabinData }  = useCabins()
  const [searchParams] = useSearchParams()

// 1) filter
  const filterValue = searchParams.get("discount") || "all"

  let filterCabins = [];
  if(filterValue === "with-discount") {
    filterCabins = cabinData?.filter(cabin=> cabin.discount > 0 )
  }
  if(filterValue === "no-discount"){
  filterCabins = cabinData?.filter(cabin=> cabin.discount === 0)
  }
  if(filterValue === "all") {
    filterCabins = cabinData
  }
 
  // 2) - Sort

  const sortedBy = searchParams.get("sortBy") || "StartDate-asc"
  const[field , direction] =  sortedBy.split("-")
  const modifier = direction ==="asc" ? 1 : -1
  const sortedCabin = filterCabins?.sort((a, b) => (a[field] - b[field])* modifier  )


  if(!cabinData?.length) return <Empty resource={"cabin"} />

  if(isLoading) return <Spinner/>
  
  return (
    <Menus>
    <Table columns="0.6fr 1.8fr 1fr 1fr 1fr 1fr"> 
      <Table.Header role="row ">
        <div></div>
        <div>Cabin</div>
        <div>Capacity</div>
        <div>Price</div>
        <div>Discount</div>
        <div></div>
      </Table.Header>
      <Table.Body data={sortedCabin} render={(cabin => <CabinRow cabin={cabin} key={cabin.cabinId}  />)} />
    </Table>
    </Menus>
  )
}

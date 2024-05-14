

import CabinTable from "../features/cabins/CabinTable";


import Heading from "../ui/Heading";
import Row from "../ui/Row"
import CabinTableOperations from "../pages/CabinTabelOperations"
import AddCabin from "../features/cabins/AddCabin";


function Cabins() {
  
  return (
    <>
    <Row type={"horizontal"} >
      <Heading as="h1">All cabins</Heading>
      <CabinTableOperations></CabinTableOperations>
    </Row>
     <CabinTable />  
     <AddCabin/>

    </>
  );
}

export default Cabins;

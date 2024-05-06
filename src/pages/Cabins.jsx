
import { useState } from "react";
import CabinTable from "../features/cabins/CabinTable";
import CreateCabinForm from "../features/cabins/CreateCabinForm";
import Button from "../ui/Button";
import Heading from "../ui/Heading";
import Row from "../ui/Row"
import styled from "styled-components";

const ButtonWidth = styled.div`
 width: 200px;
`
function Cabins() {
  const [showFrom , setShowForm] = useState(false)
  return (
    <>
    <Row>
      <Heading as="h1">All cabins</Heading>
      <p>Filter / Sort </p>
    </Row>

     <CabinTable />  
     <ButtonWidth>
     <Button onClick={()=> setShowForm(setShowForm => !setShowForm)}>Add new cabin </Button>
     </ButtonWidth>
     {showFrom && <CreateCabinForm/>  }

    </>
  );
}

export default Cabins;

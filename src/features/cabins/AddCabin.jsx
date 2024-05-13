import styled from "styled-components"
import Button from "../../ui/Button"
import Modal from "../../ui/Modal"
import { useState } from "react"
import CreateCabinForm from "./CreateCabinForm"

const ButtonWidth = styled.div`
 width: 200px;
`

export default function AddCabin(){
  return(
    <Modal>
      <Modal.Open opens={"cabin-form"}>
      <ButtonWidth>
        <Button>Add new Cabin</Button>
      </ButtonWidth>
      </Modal.Open>
      <Modal.Window name={"cabin-form"}>
        <CreateCabinForm  />
      </Modal.Window>
    </Modal>
  )
}


// export default function AddCabin() {
//     const [isOpenModel , setIsOpenModel] = useState(false)

//   return (
//     <div>
//      <ButtonWidth>
//      <Button onClick={()=> setIsOpenModel(setIsOpenModel => !setIsOpenModel)}>Add new cabin </Button>
//      </ButtonWidth>
//      {/* {isOpenModel && <CreateCabinForm/>  } */}
//      {isOpenModel && <Modal onClose={()=>setIsOpenModel(false)}><CreateCabinForm onClose={()=>setIsOpenModel(false)} /> </Modal>  }
//     </div>
//   )
// }

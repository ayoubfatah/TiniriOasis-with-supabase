import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import EditCabinsForm from "./EditCabinsForm";


export default function EditCabin({cabinDefaultValues}) {

  return (
    <Modal>
    <Modal.Open opens={"edit-form"}>
        <Button>edit form</Button>
      </Modal.Open>
    <Modal.Window name={"edit-form"}>
      <EditCabinsForm  cabinDefaultValues={cabinDefaultValues} />
    </Modal.Window>
{/*  */}
   </Modal>
  )
}

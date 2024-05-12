import styled from "styled-components";
import { formatCurrency } from "../../utils/helpers";
import { useState } from "react";
import useDeleteCabin from "./useDeleteCabin";
import { HiMiniEllipsisVertical, HiMiniPencilSquare, HiSquare2Stack, HiTrash } from "react-icons/hi2";
import useCreateCabin from "./useCreatCabin";
import ConfirmDelete from "../../ui/ConfirmDelete";
import EditCabinsForm from "./EditCabinsForm";
import Modal from "../../ui/Modal";
import Table from "../../ui/Table";

const TableIcons = styled.button`
    border: none;
    background: none;
    color: grey;
    display:flex;
    align-items:center;
    gap:6px
`;

/* 
const TableRow = styled.div`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;
  padding: 1.4rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`; */

const Img = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
`;

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Price = styled.div`
  font-family: "Sono";
  font-weight: 600;
`;

const Discount = styled.div`
  font-family: "Sono";
  font-weight: 500;
  color: var(--color-green-700);
`;
const ButtonContainer = styled.div`

;
`

export default function CabinRow({cabin}) {
  const { cabinId, created_at, description, discount, image, maxCapacity, name, regularPrice } = cabin;
    //temp
  const [showEdit , setShowEdit] = useState(false)
  const{isDeleting , mutate: deleteCabinFun} = useDeleteCabin()
  const {mutate: duplicateCabinFun , isInserting}  = useCreateCabin()

  function handleDuplicate(){
 duplicateCabinFun({
  cabinId: Math.floor(Math.random()*10000),
  name: `Copy of ${name}`,
  created_at ,
  maxCapacity,
  regularPrice,
  discount,
  image,
  description,
  
 })
  } 
 
  return (
    <>
    <Table.Row>
    <Img src={image}/>
    <Cabin>{name}</Cabin>
    <span>fits up to {maxCapacity} guests</span>
    <Price>{formatCurrency(regularPrice)} </Price>
    <Discount>{formatCurrency(discount)} </Discount>
    <ButtonContainer>

    <TableIcons className="duplicating"  disabled={isInserting} onClick={handleDuplicate} ><HiSquare2Stack/> <span>Duplicate</span> </TableIcons>
    <Modal>
      {/* edit */}
    <Modal.Open opens={"edit-form"}>
    <TableIcons><HiMiniPencilSquare /> <span>Edit</span> </TableIcons>
      </Modal.Open>
    <Modal.Window name={"edit-form"}>
      <EditCabinsForm cabinDefaultValues={cabin}  />
    </Modal.Window>
   </Modal>
   {/* delete */}
<Modal>
    <Modal.Open opens={"delete-form"}>
    <TableIcons  disabled={isDeleting}><HiTrash /><span>Delete</span>  </TableIcons>
      </Modal.Open>
    <Modal.Window name={"delete-form"}>
    <ConfirmDelete resourceName={"Cabin"} disabled={isDeleting}  onConfirm={()=>deleteCabinFun(cabinId)}  />
    </Modal.Window>
</Modal>
    </ButtonContainer>
   </Table.Row>
   
    </>
  )
}

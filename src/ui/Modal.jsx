import { cloneElement, createContext, useContext, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { HiXMark } from "react-icons/hi2";
import styled from "styled-components";
import useCloseModal from "../hooks/useCloseModal";

const StyledModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-lg);
  padding: 3.2rem 4rem;
  transition: all 0.5s;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: var(--backdrop-color);
  backdrop-filter: blur(4px);
  z-index: 1000;
  transition: all 0.5s;
`;

const Button = styled.button`
  background: none;
  border: none;
  padding: 0.4rem;
  border-radius: var(--border-radius-sm);
  transform: translateX(0.8rem);
  transition: all 0.2s;
  position: absolute;
  top: 1.2rem;
  right: 1.9rem;

  &:hover {
    background-color: var(--color-grey-100);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    /* Sometimes we need both */
    /* fill: var(--color-grey-500);
    stroke: var(--color-grey-500); */
    color: var(--color-grey-500);
  }

`;

const ModalContext = createContext();
 
export default  function Modal({children}){
  const[openName , setOpenName ] = useState("")

  const close = ()=> setOpenName("")
  const openingWindow = (prop)=> setOpenName(prop)

  return(

  <ModalContext.Provider value={{openingWindow , openName , close}} >
    {children}
  </ModalContext.Provider>
  )
}

function Open({children , opens}){
  const {openingWindow} = useContext(ModalContext)
  return cloneElement(children , {onClick: ()=> openingWindow(opens)})
}

function Window({children ,name}) {
  const {openName , close} = useContext(ModalContext)
 

  
  const {overlyRef} =useCloseModal(close)



  if(openName !== name) return null
  return (
    createPortal(
      <Overlay ref={overlyRef}>
      <StyledModal>
        <Button onClick={close} ><HiXMark /></Button>
        <div>{cloneElement(children , {onClose: close} )}</div>
      </StyledModal>
    </Overlay> , document.body
    )
  )
}
 
Modal.Window = Window 
Modal.Open = Open
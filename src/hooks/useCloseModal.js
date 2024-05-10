import { useEffect, useRef } from "react";

 export default function useCloseModal(closeModalFunction){

  const overlyRef = useRef()

  useEffect(() => {
    if (!overlyRef.current) return
    function handleClick(e) {
        if (e.target === overlyRef.current) closeModalFunction();
    }

    function handleEscape(e) {
        if (e.key === "Escape") closeModalFunction();
    }

    document.addEventListener("click", handleClick);
    document.addEventListener("keydown", handleEscape);

    return () => {
        document.removeEventListener("click", handleClick);
        document.removeEventListener("keydown", handleEscape);
    };
}, [closeModalFunction, overlyRef]);

return {overlyRef}
 }
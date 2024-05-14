// usefull when u have a modal or a menu and u wanna close it buy clicking outside of it 

import { useEffect, useRef } from "react";

export function useOutsideClick(handler, listenCapturing = true) {
    const ref = useRef();
  
    useEffect(
      function () {
        function handleClick(e) {
          if (ref.current && !ref.current.contains(e.target)) {
            handler();
          }
        }
  
        function handleEscapeKey(e) {
          if (e.key === "Escape") {
            handler();
          }
        }
  
        document.addEventListener("click", handleClick, listenCapturing);
        document.addEventListener("keydown", handleEscapeKey);
  
        return () => {
          document.removeEventListener("click", handleClick, listenCapturing);
          document.removeEventListener("keydown", handleEscapeKey);
        };
      },
      [handler, listenCapturing]
    );
  
    return ref;
  }
  
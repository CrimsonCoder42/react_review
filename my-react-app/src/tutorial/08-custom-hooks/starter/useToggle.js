import { useState } from "react";

const useToggle = (initialValue = false) => {
  const [show, setShow] = useState(initialValue);
  const toggle = () => {
    setShow(!show);
  }
  return {show, toggle};

};

export default useToggle;
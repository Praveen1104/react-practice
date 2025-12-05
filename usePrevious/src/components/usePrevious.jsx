import { useEffect, useRef } from "react";

export default function usePrevious(value) {
  console.log("use previous", value);
  const ref = useRef();

  useEffect(() => {
    console.log(ref.current);
    ref.current = value;
  }, [value]);

  return ref.current;
}

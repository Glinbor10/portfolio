import { useEffect, useRef, useState } from "react";

/** Types out `text` character by character; restarts whenever `text` changes (e.g. on language toggle). */
export function useTypewriter(text: string, speed = 32): string {
  const [output, setOutput] = useState("");
  const indexRef = useRef(0);

  useEffect(() => {
    indexRef.current = 0;
    const id = setInterval(() => {
      indexRef.current += 1;
      setOutput(text.slice(0, indexRef.current));
      if (indexRef.current >= text.length) clearInterval(id);
    }, speed);
    return () => clearInterval(id);
  }, [text, speed]);

  return output;
}

import { useEffect } from "react";

/**
 * Adds a global ✨ cursor on any element marked interactive.
 * Implemented via CSS class on <body>, so it's free at runtime.
 */
export function Cursor() {
  useEffect(() => {
    document.body.classList.add("cursor-spark-root");
    // Apply spark cursor to all interactive selectors
    const style = document.createElement("style");
    style.innerHTML = `
      a, button, [role="button"], summary, label[for], input[type="submit"] {
        cursor: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='28' height='28' viewBox='0 0 32 32'><text y='24' font-size='22'>✨</text></svg>") 8 8, pointer;
      }
    `;
    document.head.appendChild(style);
    return () => { style.remove(); };
  }, []);
  return null;
}

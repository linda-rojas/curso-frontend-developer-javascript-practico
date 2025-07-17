import { useEffect } from "react";

/**
 * @param {Array} refs - Array de refs que contienen los elementos dentro de los que NO se debe cerrar.
 * @param {Function} handler - Función a ejecutar si el click ocurre fuera de todos los elementos.
 * @param {boolean} whenActive - Controla si se activa el efecto.
 */

// Cuando haga click por fuera del elemento este se cierre
export function useClickOutside(refs, handler, whenActive = true) {
  useEffect(() => {
    if (!whenActive) return;

    const listener = (event) => {
      const clickedInside = refs.some(
        (ref) => ref.current && ref.current.contains(event.target)
      );

      if (!clickedInside) {
        handler();
      }
    };

    document.addEventListener("mousedown", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
    };
  }, [refs, handler, whenActive]);
}

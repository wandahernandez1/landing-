import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * ScrollToTop - Componente global para resetear scroll al cambiar de ruta
 * 
 * Características:
 * - Detecta cambios en location.pathname
 * - Respeta prefers-reduced-motion para accesibilidad
 * - Funciona en desktop y mobile
 * - Compatible con navegación hacia atrás/adelante
 */
export function ScrollToTop(): null {
  const { pathname } = useLocation();

  useEffect(() => {
    // Verificar preferencia de usuario para movimiento reducido
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Scroll al inicio - instant si prefiere movimiento reducido, smooth en caso contrario
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: prefersReducedMotion ? "instant" : "smooth",
    });
  }, [pathname]);

  return null;
}

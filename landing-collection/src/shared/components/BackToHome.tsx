import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Home } from 'lucide-react'

interface BackToHomeProps {
  /** Umbral de scroll en píxeles para mostrar el botón */
  scrollThreshold?: number
  /** Color de acento para el hover (clase de Tailwind) */
  accentColor?: string
}

/**
 * Botón flotante para volver al home.
 * Aparece después de hacer scroll y se posiciona en la esquina inferior izquierda.
 */
export function BackToHome({ 
  scrollThreshold = 300,
  accentColor = 'hover:bg-white/10'
}: BackToHomeProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > scrollThreshold)
    }

    // Verificar posición inicial
    handleScroll()

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [scrollThreshold])

  return (
    <Link
      to="/"
      className={`
        fixed bottom-6 left-6 z-50
        flex items-center justify-center
        h-12 w-12
        rounded-full
        bg-neutral-900/80 backdrop-blur-md
        border border-white/10
        text-neutral-400
        ${accentColor} hover:text-white hover:border-white/20
        transition-all duration-300 ease-out
        ${isVisible 
          ? 'opacity-100 translate-y-0 pointer-events-auto' 
          : 'opacity-0 translate-y-4 pointer-events-none'
        }
        shadow-lg shadow-black/20
        group
      `}
      aria-label="Volver al inicio"
      title="Volver al inicio"
    >
      <Home className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
    </Link>
  )
}

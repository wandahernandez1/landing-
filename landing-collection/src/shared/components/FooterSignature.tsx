/**
 * FooterSignature Component
 * Displays developer attribution across all pages
 */

export function FooterSignature() {
  return (
    <div
      className="w-full py-4 text-center"
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0.95)',
        borderTop: '1px solid rgba(255, 255, 255, 0.06)',
      }}
    >
      <p
        className="text-sm"
        style={{
          color: 'rgba(163, 163, 163, 0.8)',
          letterSpacing: '0.02em',
        }}
      >
        Desarrollado por Wanda Solange Hernandez
      </p>
    </div>
  );
}

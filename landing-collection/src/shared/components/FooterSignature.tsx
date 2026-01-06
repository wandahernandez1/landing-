/**
 * FooterSignature Component
 * Professional developer attribution displayed across all pages
 */

export function FooterSignature() {
  return (
    <div className="w-full">
      <div className="container-custom">
        <div className="flex items-center justify-center py-6 md:py-8">
          <p className="text-sm font-medium text-neutral-400 transition-colors duration-300 hover:text-neutral-300">
            by{" "}
            <span className="text-neutral-300">
              Wanda Solange Hernandez
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

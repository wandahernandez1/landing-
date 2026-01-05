/**
 * PageLayout Component
 * Global wrapper that includes FooterSignature on all pages
 */

import type { ReactNode } from 'react';
import { FooterSignature } from './FooterSignature';

interface PageLayoutProps {
  children: ReactNode;
}

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <>
      {children}
      <FooterSignature />
    </>
  );
}

import './globals.css';
import type { Metadata } from 'next';
import { Cursor } from '@/components/Cursor';
import { CookieBanner } from '@/components/CookieBanner';

export const metadata: Metadata = {
  title: 'OORYON - Intelligence, made physical.',
  description: 'Ooryon designs, simulates, and builds intelligent physical systems. Computational design, engineering simulation, digital twins, robotics, and advanced manufacturing.',
  icons: {
    icon: '/ooryon-logo.png',
    apple: '/ooryon-logo.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Cursor />
        <CookieBanner />
        {children}
      </body>
    </html>
  );
}

import './globals.css';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CartProvider } from '@/components/CartProvider';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const metadata = {
  title: 'Lume Gua Sha — Sculpt. Depuff. Glow.',
  description:
    'The stainless steel gua sha tool that replaces your jade roller — and lasts a lifetime.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body className="min-h-screen flex flex-col">
        <CartProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}

'use client';

import Head from 'next/head';
import './globals.css';
import Link from 'next/link';
import { CartProvider, useCart } from './context/CartContext';

function Header() {
  const { cart } = useCart();

  return (
    <header className="bg-blue-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">My E-commerce</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="/" className="hover:underline">Home</Link></li>
            <li><Link href="/products" className="hover:underline">Products</Link></li>
            <li><Link href="/about" className="hover:underline">About</Link></li>
            <li><Link href="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </nav>
        <Link href="/cart" className="text-sm bg-blue-700 py-1 px-3 rounded hover:bg-blue-800">
          Cart: {cart.length} item(s)
        </Link>
      </div>
    </header>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <Head>
        <title>My E-commerce</title>
        <meta name="description" content="A modern e-commerce platform for all your shopping needs." />
      </Head>
      <body className="bg-gray-900 text-white">
        <CartProvider>
          <Header />
          <main className="container mx-auto p-4">{children}</main>
          <footer className="bg-gray-700 text-white text-center p-4 mt-8">
            <p>&copy; 2025 My E-commerce. All rights reserved.</p>
          </footer>
        </CartProvider>
      </body>
    </html>
  );
}

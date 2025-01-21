'use client';

import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid'; // Importando uuid
interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  uniqueId?: string;  // Tornando uniqueId opcional
}

interface CartItem extends Omit<Product, 'uniqueId'> {
  uniqueId: string;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Omit<Product, 'uniqueId'>) => void;
  removeFromCart: (uniqueId: string) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);

  // Carregar o carrinho do localStorage
  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  // Salvar o carrinho no localStorage
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product: Omit<Product, 'uniqueId'>) => {
    const newItem = { ...product, uniqueId: uuidv4() };
    setCart((prevCart) => [...prevCart, newItem]);
  };

  const removeFromCart = (uniqueId: string) => {
    setCart(cart.filter(product => product.uniqueId !== uniqueId));
  };
  
  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}

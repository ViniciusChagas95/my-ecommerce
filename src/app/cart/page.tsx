'use client';
import Link from 'next/link';


import { useCart } from '../context/CartContext';


export default function CartPage() {
  const { cart, removeFromCart } = useCart();

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + parseFloat(item.price.slice(1)), 0);
  };

  if (cart.length === 0) {
    return (
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Your Cart is Empty</h2>
        <p className="text-gray-500">Browse products and add items to your cart!</p>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      <ul className="space-y-4">
        {cart.map((item) => (
          <li key={item.id} className="flex items-center justify-between bg-gray-800 p-4 rounded-lg">
            <div>
              <h3 className="text-lg font-bold">{item.name}</h3>
              <p className="text-gray-400">{item.price}</p>
            </div>
            <button
              onClick={() => removeFromCart(item.uniqueId)}
              className="bg-red-600 text-white py-1 px-3 rounded hover:bg-red-700"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      <div className="mt-6 text-right">
        <p className="text-xl font-bold">Subtotal: ${calculateTotal().toFixed(2)}</p>
        <Link href="/checkout">
            <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
                 Proceed to Checkout
            </button>
         </Link>
      </div>
    </div>
    
  );
}

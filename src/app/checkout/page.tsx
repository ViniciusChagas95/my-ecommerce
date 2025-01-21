'use client';

import { useCart } from '../context/CartContext';
import { useRouter } from 'next/navigation';

export default function CheckoutPage() {
  const { cart, clearCart } = useCart();
  const router = useRouter();

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + parseFloat(item.price.slice(1)), 0);
  };

  const handleCheckout = () => {
    // Limpa o carrinho
    clearCart();

    // Mostra uma mensagem de sucesso
    alert('Purchase completed successfully! Thank you for shopping with us.');

    // Redireciona para a página inicial ou de agradecimento
    router.push('/');
  };

  if (cart.length === 0) {
    return (
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Your Cart is Empty</h2>
        <p className="text-gray-500">Add items to your cart before checking out!</p>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Checkout</h2>
      <ul className="space-y-4">
        {cart.map((item) => (
            <li key={item.uniqueId} // Garantimos que o `uniqueId` está sendo usado como chave
            className="flex items-center justify-between bg-gray-800 p-4 rounded-lg">
      <div>
        <h3 className="text-lg font-bold">{item.name}</h3>
        <p className="text-gray-400">{item.price}</p>
      </div>
      </li>
      ))}
      </ul>
      <div className="mt-6 text-right">
        <p className="text-xl font-bold">Total: ${calculateTotal().toFixed(2)}</p>
        <button
          onClick={handleCheckout}
          className="mt-4 bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
        >
          Complete Purchase
        </button>
      </div>
    </div>
  );
}

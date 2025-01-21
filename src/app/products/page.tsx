'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '../context/CartContext';

export default function Products() {
    const { addToCart } = useCart();
    const products = [
      { id: 1, name: 'Product A', price: '$10', image: 'https://via.placeholder.com/150' },
      { id: 2, name: 'Product B', price: '$15', image: 'https://via.placeholder.com/150' },
      { id: 3, name: 'Product C', price: '$20', image: 'https://via.placeholder.com/150' },
    ];
  
    return (
      <div>
        <h2 className="text-2xl font-bold text-center mb-4">Our Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="border rounded-lg p-4 bg-white shadow-md hover:shadow-lg"
            >
              <Link href={`/products/${product.id}`} className="block">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={150}
                  height={150}
                  className="w-full h-40 object-cover mb-2"
                />
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-gray-700">{product.price}</p>
              </Link>
              
              <button
                onClick={() => addToCart(product)}
                className="mt-2 bg-blue-600 text-white py-1 px-4 rounded hover:bg-blue-700"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
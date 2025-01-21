import Image from 'next/image';

interface Product {
    id: number;
    name: string;
    price: string;
    description: string;
    image: string;
  }
  
  const mockProducts: Product[] = [
    { id: 1, name: 'Product A', price: '$10', description: 'This is Product A.', image: 'https://via.placeholder.com/300' },
    { id: 2, name: 'Product B', price: '$15', description: 'This is Product B.', image: 'https://via.placeholder.com/300' },
    { id: 3, name: 'Product C', price: '$20', description: 'This is Product C.', image: 'https://via.placeholder.com/300' },
  ];
  
  export default function ProductDetails({ params }: { params: { id: string } }) {
    const product = mockProducts.find((p) => p.id === parseInt(params.id));
  
    if (!product) {
      return <p className="text-center text-red-500">Product not found</p>;
    }
  
    return (
      <div className="max-w-4xl mx-auto p-4 bg-gray-800 text-white rounded-lg shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Image
            src={product.image}
            alt={product.name}
            width={300}
            height={300}
            className="w-full rounded-lg"
          />
          <div>
            <h2 className="text-3xl font-bold mb-2">{product.name}</h2>
            <p className="text-xl text-blue-400">{product.price}</p>
            <p className="text-gray-300 mt-4">{product.description}</p>
            <button className="mt-6 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    );
  }
  
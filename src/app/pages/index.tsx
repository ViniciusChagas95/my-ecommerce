import React from 'react';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="container mx-auto p-4">
          <h1 className="text-2xl font-bold">My E-Commerce</h1>
        </div>
      </header>
      <main className="container mx-auto p-4">
        <p>Welcome to the modern e-commerce project!</p>
      </main>
      <footer className="bg-gray-200 text-center py-4">
        <p>&copy; {new Date().getFullYear()} My E-Commerce</p>
      </footer>
    </div>
  );
};

export default HomePage;

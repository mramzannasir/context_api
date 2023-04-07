import { useState, useEffect } from 'react';

const Temp = () => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/3`)
      .then(response => response.json())
      .then(data => setProduct(data))
      .catch(error => console.log("Error fetching product", error));
  }, []);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-lg mx-auto mt-8 bg-white rounded-lg shadow-lg">
      <img src={product.image} alt={product.title} className="rounded-t-lg"/>
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-2">{product.title}</h2>
        <p className="text-gray-700 text-base">{product.description}</p>
        <p className="text-gray-900 font-bold text-xl mt-4">${product.price}</p>
      </div>
    </div>
  );
};

export default Temp;

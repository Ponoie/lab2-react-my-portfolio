import { useState } from "react";
import { Link } from "react-router-dom";
import { products } from "../data/products";

const Catalog = () => {
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Product Catalog</h1>

      {/* Search box */}
      <input
        type="text"
        placeholder="Search products..."
        className="w-full p-3 border rounded-lg mb-8"
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Product list */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="p-4 border rounded-xl hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="text-gray-500">{product.price} THB</p>

            <Link
              to={`/product/${product.id}`}
              className="inline-block mt-3 text-blue-600 hover:underline"
            >
              View Details →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalog;

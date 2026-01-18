import { useParams, useNavigate } from "react-router-dom";
import { products } from "../data/products";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find((p) => p.id === id);

  if (!product) {
    return <div className="p-10 text-center">Product not found</div>;
  }

  return (
    <div className="max-w-2xl mx-auto p-10 border rounded-2xl mt-10">
      <button
        onClick={() => navigate(-1)}
        className="mb-4 text-sm text-gray-500 hover:text-black"
      >
        ← Back to Catalog
      </button>

      <h1 className="text-4xl font-bold mb-2">{product.name}</h1>

      <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
        {product.category}
      </span>

      <p className="text-2xl text-green-600 my-4">{product.price} THB</p>
      <p className="text-gray-600">{product.desc}</p>
    </div>
  );
};

export default ProductDetail;

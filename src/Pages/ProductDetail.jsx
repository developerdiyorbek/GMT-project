import { useParams } from "react-router-dom";

import Products from "../data/products.json";

const ProductDetail = () => {
  const { id } = useParams();

  const product = Products.find((item) => item.document_id == id);

  return (
    <section className="mx-auto my-10 max-w-[1300px] px-5">
      <div>
        <p>
          {product?.commercial_name}, {id}
        </p>
      </div>
    </section>
  );
};

export default ProductDetail;

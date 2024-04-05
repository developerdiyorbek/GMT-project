import { useParams } from "react-router-dom";

import Products from "../data/products.json";
import { BreadCrumbs } from "../components";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";

const ProductDetail = () => {
  const { id } = useParams();

  const product = Products.find((item) => item.document_id == id);

  console.log(product);

  return (
    <section className="mx-auto my-10 max-w-[1300px] px-5">
      <BreadCrumbs />
      <div className="flex flex-col gap-5 md:flex-row md:gap-0 md:justify-between">
        <div>
          <LazyLoadImage
            src={product.img}
            alt={product.commercial_name}
            className="w-full h-full"
          />
        </div>
        <div>
          <h2>{product.commercial_name}</h2>
          <div className="flex items-center">
            {Array(Math.floor(product.rating))
              .fill()
              .map((_, index) => (
                <span key={index}>
                  <FaStar size={20} />
                </span>
              ))}
            {Array(5 - Math.floor(product.rating))
              .fill()
              .map((_, index) => (
                <span key={index}>
                  <FaRegStar size={20} />
                </span>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;

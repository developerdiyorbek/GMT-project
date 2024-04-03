import { Link } from "react-router-dom";
import Products from "../data/products.json";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Category = () => {
  const products = Products.map((item) => {
    return {
      ...item,
      img: `https://picsum.photos/300?random=${Math.ceil(Math.random() * 24)}`,
    };
  });

  return (
    <section className="mx-auto my-12 w-full max-w-[1300px] px-5 md:my-[100px]">
      <div className="mb-6 flex items-center justify-between sm:mb-8 md:mb-10">
        <h2 className="text-[18px] font-medium text-[#202020] sm:text-[20px] md:text-[30px]">
          Популярные категории
        </h2>
        <button className="hidden rounded-[50px] bg-[#088269] px-5 py-2 text-[12px] font-semibold text-[#F8F7F3] sm:block sm:text-[14px] md:px-7 md:py-3 md:text-[16px]">
          Все категории
        </button>
      </div>
      <div className="grid grid-cols-4 gap-5">
        {products.map((product) => (
          <Link
            key={product.document_id}
            to={`/${product.document_id}`}
            className="rounded-[10px] border-[1px] border-[#E5E2EE]"
          >
            <LazyLoadImage
              src={product.img}
              alt={product.commercial_name}
              className="w-full rounded-t-[10px]"
              height={300}
              effect="blur"
            />
            <p>{product.commercial_name}</p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Category;

import { useParams } from "react-router-dom";

import Products from "../data/products.json";
import { BreadCrumbs, Brends, Cabinet, Subscribe } from "../components";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { FaStar } from "react-icons/fa";

import { toast } from "react-hot-toast";
import { useEffect } from "react";

const ProductDetail = () => {
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // get product by id
  const product = Products.find((item) => item.document_id == id);

  // add to basket
  const handleAdd = (id) => {
    const products = JSON.parse(localStorage.getItem("products")) || [];

    const isExist = products.find((item) => item.document_id === id);

    if (isExist) {
      const updatedData = products.map((item) => {
        if (item.document_id == id) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }
        return item;
      });
      localStorage.setItem("products", JSON.stringify(updatedData));
    } else {
      const data = [...products, { ...product, quantity: 1 }];
      localStorage.setItem("products", JSON.stringify(data));
    }
    toast.success("product add to basket 🧺");
  };

  return (
    <>
      <section className="mx-auto mt-10 max-w-[1300px] px-5">
        <BreadCrumbs />
        <div className="flex flex-col gap-[15px] sm:gap-5 md:gap-[60px] md:flex-row md:justify-between">
          <div className="w-full h-">
            <LazyLoadImage
              src={product.img}
              alt={product.commercial_name}
              className="w-full h-full"
              height={400}
              effect="blur"
            />
          </div>
          <div className="w-full">
            <h4 className="text-[#202020] text-[18px] font-medium mb-2 sm:text-[20px] sm:mb-[10px]">
              {product.commercial_name}
            </h4>
            <div className="flex items-center mb-[10px] md:mb-[15px]">
              {Array(Math.floor(product.rating))
                .fill()
                .map((_, index) => (
                  <span key={index} className="text-[#FFC536]">
                    <FaStar size={20} />
                  </span>
                ))}
              {Array(5 - Math.floor(product.rating))
                .fill()
                .map((_, index) => (
                  <span key={index} className="text-[#7A7687]">
                    <FaStar size={20} />
                  </span>
                ))}
            </div>
            <p className="text-[#7A7687] text-[12px] md:text-[14px] mb-1">
              Категория: {product.leafletTypeCode}
            </p>
            <p className="text-[#7A7687] text-[12px] md:text-[14px] mb-1">
              Артикул: {product.document_id}
            </p>
            <p className="text-[#7A7687] text-[12px] md:text-[14px] mb-1">
              В наличии
            </p>
            <p className="text-[14px] md:text-[18px] mb-2 md:mb-5">
              Цена по запросу
            </p>
            <div className="flex items-center gap-4">
              <button className="rounded-[50px] border-[2px] border-[#D5D1E1] px-5 py-2 text-[12px] font-semibold text-[#088269] sm:text-[14px] xl:text-[16px] hover:border-[#07745E] duration-150 focus:bg-[#E1EFE6]">
                Задать вопрос
              </button>
              <button
                className="rounded-[50px] bg-[#088269] px-5 py-2 text-[12px] font-semibold text-[#F8F7F3] sm:text-[14px] xl:text-[16px]"
                onClick={() => product && handleAdd(product.document_id)}
              >
                Добавить в корзину
              </button>
            </div>
          </div>
        </div>
      </section>
      <Cabinet />
      <Brends />
      <Subscribe />
    </>
  );
};

export default ProductDetail;

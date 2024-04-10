import { useEffect, useState } from "react";
import { BreadCrumbs } from "../components";
import { TbShoppingCartDiscount } from "react-icons/tb";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

// icons
import { RiSubtractFill } from "react-icons/ri";
import { IoMdAdd } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

const Korzina = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [products, setProducts] = useState([]);

  // get basket products
  useEffect(() => {
    const getProducts = JSON.parse(localStorage.getItem("products")) || [];
    setProducts(getProducts);
  }, []);

  // total price
  const total = products?.reduce((acc, item) => {
    return acc + item.document_id * item.quantity;
  }, 0);

  // handle Increment
  const handleIncrement = (id) => {
    const updatedProduct = products.map((item) => {
      if (item.document_id === id) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      }
      return item;
    });
    localStorage.setItem("products", JSON.stringify(updatedProduct));
    setProducts(updatedProduct);
  };

  // handle Decrement
  const handleDecrement = (id) => {
    const getProductById = products.find((item) => item.document_id === id);
    if (getProductById.quantity === 1) {
      handleRemove(getProductById.document_id);
    } else {
      const updatedProducts = products.map((item) => {
        if (item.document_id === id) {
          return {
            ...item,
            quantity: item.quantity - 1,
          };
        }
        return item;
      });
      localStorage.setItem("products", JSON.stringify(updatedProducts));
      setProducts(updatedProducts);
    }
  };

  // remove Product
  const handleRemove = (id) => {
    const filterProduct = products.filter((item) => item.document_id !== id);
    localStorage.setItem("products", JSON.stringify(filterProduct));
    setProducts(filterProduct);
  };

  if (!products.length)
    return (
      <div className="flex flex-col items-center justify-center my-32">
        <TbShoppingCartDiscount className="w-24 h-24 text-gray-400" />
        <p className="mt-4 text-lg md:text-3xl text-[#088269]">
          Your basket is empty
        </p>
        <Link
          to="/catalog"
          className="mt-4 text-lg bg-[#088269] rounded-[10px] text-white p-2"
        >
          Go to catalog
        </Link>
      </div>
    );

  return (
    <section className="max-w-[1300px]  mx-auto px-5">
      <BreadCrumbs />
      <div className="flex flex-col md:flex-row mb-[60px] sm:mb-[120px] md:mb-[150px] gap-3">
        <div className="max-w-[100%] md:max-w-[70%] w-full">
          {products.map((product) => (
            <div
              className="flex relative mb-3  border-[2px] border-[#E5E2EE] rounded-[10px]"
              key={product.document_id}
            >
              <LazyLoadImage
                src={product.img}
                alt={product.mah}
                className="h-full w-full rounded-l-[10px]"
                height={200}
                width={200}
                effect="blur"
              />
              <div className="flex flex-col md:flex-row mx-5 mt-7 gap-6">
                <div>
                  <h4 className="font-medium max-w-[200px] w-full truncate">
                    {product.mah}
                  </h4>
                  <p className="text-[#7A7687] text-[12px] md:text-[14px] mb-1">
                    Артикул: {product.document_id}
                  </p>
                  <p className="text-[#7A7687] text-[12px] md:text-[14px] mb-1">
                    В наличии
                  </p>
                </div>
                <div>
                  <p className="text-[#202020] font-medium mb-2 sm:mb-5 md:mb-6">
                    {product.document_id.toLocaleString()} руб.
                  </p>
                  <div className="flex items-center justify-center gap-3 border-[2px] border-[#D5D1E1] rounded-[50px] max-w-[100px] w-full">
                    <button
                      className="text-[#7A7687]"
                      onClick={() => handleDecrement(product.document_id)}
                    >
                      <RiSubtractFill size={20} />
                    </button>
                    <p className="text-[#088269] font-semibold">
                      {product.quantity}
                    </p>
                    <button
                      className="text-[#07745E]"
                      onClick={() => handleIncrement(product.document_id)}
                    >
                      <IoMdAdd size={20} />
                    </button>
                  </div>
                </div>
              </div>
              <button
                className="absolute top-1 right-2"
                onClick={() => handleRemove(product.document_id)}
              >
                <IoMdClose size={25} />
              </button>
            </div>
          ))}
        </div>
        <div className="bg-white p-5 max-w-[400px] w-full  border-[#D5D1E1] border-[1px] rounded-[10px] h-[300px]">
          <div className="flex items-center justify-between">
            <p>Итого</p>
            <p>{total.toLocaleString()} руб.</p>
          </div>
          <div className="w-full h-[1px] my-3 bg-[#E5E2EE]"></div>
          <div className="flex items-center justify-between mb-3">
            <p>Товары ({products.length} шт)</p>
            <p>{total.toLocaleString()} руб.</p>
          </div>
          <div className="flex items-center justify-between mb-5">
            <p>Скидка</p>
            <p>0 руб.</p>
          </div>
          <button className="bg-[#088269] font-semibold rounded-[50px] py-2 text-[#F8F7F3] block mb-5 w-full">
            Оформить заказ
          </button>
          <button className="border-[1px] font-semibold rounded-[50px] py-2 border-[#D5D1E1] w-full">
            Оформить заказ
          </button>
        </div>
      </div>
    </section>
  );
};

export default Korzina;

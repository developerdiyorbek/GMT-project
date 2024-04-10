import { useEffect, useState } from "react";

import {
  AboutCompany,
  BreadCrumbs,
  Brends,
  Cabinet,
  News,
  Options,
  SendQuestion,
  Subscribe,
} from "../components";

import Products from "../data/products.json";
import Pagination from "@mui/material/Pagination";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Catalog = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // pagination
  const [page, setPage] = useState(1);
  const itemsPerPage = 6;
  const totalPages = Products ? Math.ceil(Products.length / itemsPerPage) : 0;

  const handleChange = (event, value) => {
    setPage(value);
  };

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = page * itemsPerPage;

  const currentPageData = Products?.slice(startIndex, endIndex);

  return (
    <>
      <section className="max-w-[1300px] mx-auto px-5">
        <BreadCrumbs />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mb-5 sm:mb-7 md:mb-16">
          {currentPageData.map((product) => (
            <Link
              key={product.document_id}
              to={`/catalog/${product.document_id}`}
              className="rounded-[10px] border-[1px] border-[#E5E2EE]"
            >
              <LazyLoadImage
                src={product.img}
                alt={product.commercial_name}
                className="w-full h-full rounded-t-[10px]"
                height={300}
                effect="blur"
              />
              <div className="p-4">
                <h5
                  className="text-[#202020] text-[16px] font-semibold truncate mb-1"
                  title={product.commercial_name}
                >
                  {product.commercial_name}
                </h5>
                <p className="text-[#7A7687] text-[12px] font-normal">
                  Артикул: {product.document_id}
                </p>
                <p className="text-[#7A7687] text-[12px] font-normal mb-3">
                  В наличии
                </p>
                <span className="block font-semibold text-[16px]">
                  {product.document_id.toLocaleString()} руб.
                </span>
              </div>
            </Link>
          ))}
        </div>
        <div className="mb-5 sm:mb-7 md:mb-16 flex justify-center">
          <Pagination
            count={totalPages}
            page={page}
            onChange={handleChange}
            variant="outlined"
            shape="rounded"
            color="primary"
          />
        </div>
      </section>
      <Cabinet />
      <div className="mb-[60px] sm:mb-[120px] md:mb-[150px]">
        <Options />
      </div>
      <Brends />
      <News />
      <AboutCompany />
      <SendQuestion />
      <Subscribe />
    </>
  );
};

export default Catalog;

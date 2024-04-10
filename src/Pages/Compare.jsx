import { useEffect } from "react";
import { BreadCrumbs } from "../components";

const Compare = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="max-w-[1300px] mx-auto px-5">
      <BreadCrumbs />
      <h3 className="mb-10">Compare</h3>
    </section>
  );
};

export default Compare;

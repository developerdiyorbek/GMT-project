import { useEffect } from "react";
import { BreadCrumbs } from "../components";

const Favorite = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="max-w-[1300px]  mx-auto px-5">
      <BreadCrumbs />
      <h3 className="mb-10">Favorite</h3>
    </section>
  );
};

export default Favorite;

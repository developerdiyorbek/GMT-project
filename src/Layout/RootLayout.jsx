import { Outlet } from "react-router-dom";

// Components
import { Footer, Header } from "../components";

const RootLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default RootLayout;

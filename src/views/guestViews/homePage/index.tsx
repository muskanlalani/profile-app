import dynamic from "next/dynamic";
const Header = dynamic(() => import("../guestLayout/header"));
const ProductListing = dynamic(() => import("../productListing"));

const HomePage = () => {
  return (
    <>
      <Header />
      <ProductListing />
    </>
  );
};

export default HomePage;

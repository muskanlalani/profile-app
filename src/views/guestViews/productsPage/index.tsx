"use client";
import { useProductContext } from "../../../../context/ProductContext";
import CartSummary from "../cartSummary";
import WrapperContainer from "@/components/UIComponents/WrapperContainer";
import DeleteWarning from "../deleteWarning";
import ProductHeader from "./productHeader";
import ProductCard from "./ProductCard";

const Products = () => {
  const { openWarningDeleteId } = useProductContext();

  return (
    <WrapperContainer>
      <ProductHeader />
      <WrapperContainer>
        <div className="flex flex-col md:flex-row gap-16">
          <ProductCard />
          <CartSummary />
        </div>
      </WrapperContainer>
      {openWarningDeleteId && <DeleteWarning />}
    </WrapperContainer>
  );
};

export default Products;

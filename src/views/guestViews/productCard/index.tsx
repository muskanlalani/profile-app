"use client";
import UIStyledButton from "@/components/UIComponents/UIStyledButton";
import { Product } from "../productListing";
import { useProductContext } from "../../../../context/ProductContext";

const ProductCard = ({ productDetails }: { productDetails: Product }) => {
  const { handleAddToCart, addedProductIds } = useProductContext();
  const isAdded = addedProductIds.includes(productDetails._id);

  return (
    <div className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-76 pt-4 border border-gray-200 ">
      <div
        className="bg-cover bg-center h-64 w-[170px] mx-auto shadow-2xl"
        style={{ backgroundImage: `url(${productDetails.image})` }}
        aria-label="profile-picture"
      />

      <div className="p-4 text-center">
        <h4 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
          {productDetails.name}
        </h4>
        <h4 className="block mb-2 font-sans text-sm antialiased font-semibold leading-snug tracking-normal text-blue-gray-900 truncate max-w-xs">
          {productDetails.description}
        </h4>
        <div className="flex gap-4 items-center justify-center">
          <p className="block mb-2 font-sans text-l antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
            {productDetails.currency}
            {productDetails.price}
          </p>
          <p className="block mb-2 font-sans text-l antialiased font-semibold leading-snug tracking-normal text-gray-500 line-through">
            {productDetails.currency}
            {productDetails.originalPrice}
          </p>
        </div>
      </div>
      <div className="flex justify-center p-6 pt-0 gap-7">
        <UIStyledButton handleClick={() => handleAddToCart(productDetails)}>
          <p className="block  font-sans text-sm antialiased font-semibold leading-snug tracking-normal text-blue-gray-900 truncate max-w-xs">
            {isAdded ? "Added" : "Add to cart"}
          </p>
        </UIStyledButton>
      </div>
    </div>
  );
};

export default ProductCard;

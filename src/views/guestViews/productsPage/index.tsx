"use client";
import UIStyledButton from "@/components/UIComponents/UIStyledButton";
import { useProductContext } from "../../../../context/ProductContext";
import CartSummary from "../cartSummary";
import WrapperContainer from "@/components/UIComponents/WrapperContainer";
import DeleteWarning from "../deleteWarning";

const Products = () => {
  const {
    prodDetails,
    handleAddProduct,
    handleDecreaseProduct,
    handleRemoveWarning,
    openWarningDeleteId,
  } = useProductContext();

  return (
    <WrapperContainer>
      <div className="flex px-4 items-center border-b  pb-2">
        <h4 className="text-2xl font-bold text-gray-700 mb-0">My Cart</h4>
      </div>
      <WrapperContainer>
        <div className="flex flex-col md:flex-row gap-16">
          <div>
            {prodDetails?.map((product) => (
              <div
                key={product._id}
                className="bg-white shadow-lg rounded-lg p-4 mb-4 max-w-md border border-gray-200 "
              >
                <div className="flex gap-4">
                  <div
                    className="bg-cover bg-center h-64 w-[170px]"
                    style={{ backgroundImage: `url(${product.image})` }}
                    aria-label="product-image"
                  />
                  <div className="flex flex-col justify-between">
                    <div className="mb-4">
                      <h4 className="text-l font-semibold text-blue-gray-900 mb-2">
                        {product.name}
                      </h4>
                      <h4 className="block text-gray-500  mb-2 font-sans text-sm antialiased font-semibold leading-snug tracking-normal text-blue-gray-900 truncate max-w-[160px]">
                        {product.description}
                      </h4>
                      <div className="flex gap-4 items-center">
                        <p className="block mb-2 font-sans text-l antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                          {product.currency}
                          {product.totalPrice}
                        </p>
                        <p className="block mb-2 font-sans text-l antialiased font-semibold leading-snug tracking-normal text-gray-500 line-through">
                          {product.currency}
                          {product.totalDiscount}
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4 w-full max-w-[130px]">
                      <UIStyledButton
                        handleClick={() => handleDecreaseProduct(product)}
                      >
                        <p className="block  font-sans text-sm antialiased font-semibold leading-snug tracking-normal text-blue-gray-900 truncate max-w-xs">
                          -
                        </p>
                      </UIStyledButton>
                      <p className="text-xl font-semibold text-gray-800 mb-2">
                        {product.quantity}
                      </p>
                      <UIStyledButton
                        handleClick={() => handleAddProduct(product)}
                      >
                        <p className="block  font-sans text-sm antialiased font-semibold leading-snug tracking-normal text-blue-gray-900 truncate max-w-xs">
                          +
                        </p>
                      </UIStyledButton>
                    </div>
                    <div className="flex w-full max-w-[130px]">
                      <UIStyledButton
                        handleClick={() => handleRemoveWarning(product._id)}
                      >
                        <p className="block  font-sans text-sm antialiased font-semibold leading-snug tracking-normal text-blue-gray-900 truncate max-w-xs">
                          Remove
                        </p>
                      </UIStyledButton>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <CartSummary />
        </div>
      </WrapperContainer>
      {openWarningDeleteId && <DeleteWarning />}
    </WrapperContainer>
  );
};

export default Products;

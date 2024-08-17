import Image from "next/image";
import { useProductContext } from "../../../../context/ProductContext";
import UIStyledButton from "@/components/UIComponents/UIStyledButton";
import { useRouter } from "next/navigation";
import ApplyCoupon from "../applyCoupon";
import WrapperContainer from "@/components/UIComponents/WrapperContainer";

const CartSummary = () => {
  const { prodDetails, isCouponApplied } = useProductContext();
  const { push } = useRouter();

  const totalPrice = prodDetails.reduce(
    (sum, product) => sum + product.totalDiscount,
    0
  );

  const totalAmountToPay = prodDetails.reduce(
    (sum, product) => sum + product.totalPrice,
    0
  );

  const couponDiscount = totalAmountToPay * 0.1;
  const totalAmountAfterCoupon = totalAmountToPay - couponDiscount;

  const totalDiscount = totalPrice - totalAmountToPay;

  const handleShoppingRedirect = () => {
    push("/");
  };

  const handleCheckoutRedirect = () => {
    push("/checkout");
  };

  return (
    <>
      {prodDetails.length > 0 ? (
        <div>
          {!isCouponApplied && <ApplyCoupon />}
          <div className="flex gap-4 flex-col pt-[12px]">
            <div className="p-4 border border-gray-200 rounded-lg h-auto max-h-96 shadow-xl">
              <h4 className="text-lg font-semibold mb-4 text-gray-500">
                PRICE DETAILS
              </h4>
              <hr className="border-t border-gray-300 mb-4" />

              <table className="w-full text-left">
                <tbody>
                  <tr>
                    <td className="py-2">Price</td>
                    <td className="py-2 text-right">₹{totalPrice}</td>
                  </tr>
                  <tr>
                    <td className="py-2">Discount</td>
                    <td className="py-2 text-right text-green-500">
                      - ₹{totalDiscount}
                    </td>
                  </tr>
                  {isCouponApplied && (
                    <tr>
                      <td className="py-2">Coupon Discount</td>
                      <td className="py-2 text-right text-green-500">
                        - ₹{couponDiscount.toFixed(2)}
                      </td>
                    </tr>
                  )}
                  <tr>
                    <td className="py-2">Delivery Charges</td>
                    <td className="py-2 text-right text-green-500">Free</td>
                  </tr>
                </tbody>
              </table>

              <hr className="border-t border-gray-300 my-4" />

              <div className="flex justify-between text-lg font-semibold">
                <span>Total Amount</span>
                <span>
                  ₹{isCouponApplied ? totalAmountAfterCoupon : totalAmountToPay}
                </span>
              </div>
            </div>
            <UIStyledButton handleClick={handleCheckoutRedirect}>
              <p className="block  font-sans text-sm antialiased font-semibold leading-snug tracking-normal text-blue-gray-900 truncate max-w-xs">
                Checkout
              </p>
            </UIStyledButton>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-3 justify-center items-center w-full">
          <Image
            src="/images/empty-cart.gif"
            height={400}
            width={400}
            alt="/no-item"
          />
          <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-gray-500">
            Your cart is empty
          </h4>
          <UIStyledButton handleClick={handleShoppingRedirect}>
            <p className="block  font-sans text-sm antialiased font-semibold leading-snug tracking-normal text-blue-gray-900 truncate max-w-xs">
              Continue shopping
            </p>
          </UIStyledButton>
        </div>
      )}
    </>
  );
};

export default CartSummary;

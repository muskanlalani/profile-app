import UIStyledButton from "@/components/UIComponents/UIStyledButton";
import { useProductContext } from "../../../../context/ProductContext";

const ApplyCoupon = () => {
  const { handleApplyCoupon, handleChangeCoupon, couponText } =
    useProductContext();

  return (
    <div className="flex items-center gap-6">
      <input
        type="text"
        placeholder="Enter coupon"
        className="border-2 border-gray-300 rounded p-2 w-full max-w-md"
        value={couponText}
        onChange={(e) => handleChangeCoupon(e.target.value)}
      />
      <UIStyledButton handleClick={() => handleApplyCoupon(couponText)}>
        <p className="block  font-sans text-sm antialiased font-semibold leading-snug tracking-normal text-blue-gray-900 truncate max-w-xs">
          Apply
        </p>
      </UIStyledButton>
    </div>
  );
};

export default ApplyCoupon;

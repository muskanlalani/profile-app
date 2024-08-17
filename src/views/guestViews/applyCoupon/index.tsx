import UIStyledButton from "@/components/UIComponents/UIStyledButton";
import { useProductContext } from "../../../../context/ProductContext";
import UIStyledInput from "@/components/UIComponents/UIStyledInput";
import ButtonText from "@/components/common/ButtonText";

const ApplyCoupon = () => {
  const { handleApplyCoupon, handleChangeCoupon, couponText, couponErr } =
    useProductContext();

  return (
    <div>
      <div className="flex items-center gap-6">
        <UIStyledInput value={couponText} handleChange={handleChangeCoupon} />
        <UIStyledButton handleClick={() => handleApplyCoupon(couponText)}>
          <ButtonText>Apply</ButtonText>
        </UIStyledButton>
      </div>
      {couponErr && (
        <div className="mt-1 text-red-600 text-sm">{couponErr}</div>
      )}
    </div>
  );
};

export default ApplyCoupon;

import Image from "next/image";
import { useProductContext } from "../../../../context/ProductContext";
import UIStyledDialog from "@/components/UIComponents/UIStyledDialog";
import { COUPON_NAME } from "../../../../constants/couponConstants";

const CouponSuccess = () => {
  const { handleCouponClose } = useProductContext();

  return (
    <UIStyledDialog>
      <button
        className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 focus:outline-none"
        onClick={handleCouponClose}
      >
        <Image src="/images/cross.svg" height={24} width={24} alt="cross" />
      </button>

      <h2 className="text-xl font-bold mb-4">Congratulations!</h2>
      <div className="flex items-center justify-center flex-col gap-4">
        <Image
          src="/images/gift-for-you.jpg"
          height={150}
          width={150}
          alt="Gift"
        />
        <p className="text-gray-700">
          You got a free coupon:{" "}
          <span className="font-semibold text-blue-600">{COUPON_NAME}</span>
        </p>
        <p className="text-gray-700">Apply this to get a 10% discount.</p>
      </div>
    </UIStyledDialog>
  );
};

export default CouponSuccess;

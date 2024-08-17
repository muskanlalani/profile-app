import Image from "next/image";
import { useProductContext } from "../../../../context/ProductContext";

const CouponGift = () => {
  const { handleCoupon } = useProductContext();

  return (
    <div
      className="fixed bottom-2 right-0 cursor-pointer"
      onClick={handleCoupon}
    >
      <Image src="/images/gift.gif" height={150} width={150} alt="Gift" />
    </div>
  );
};

export default CouponGift;

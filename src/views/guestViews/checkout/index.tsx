"use client";
import ButtonText from "@/components/common/ButtonText";
import UIStyledButton from "@/components/UIComponents/UIStyledButton";
import Image from "next/image"; //optimized image

const Checkout = () => {
  const handleHomeRedirect = () => {
    window.location.href = "/";
  };

  return (
    <div className="flex flex-col items-center justify-center text-center p-4">
      <div className="flex gap-4 flex-col items-center justify-center">
        <Image
          src="/images/success-checkout.avif"
          height={200}
          width={200}
          alt="/success"
        />
        <h4 className="mb-4 text-3xl font-semibold text-blue-gray-900">
          Wohoooo successfully checkout!🥳
        </h4>
        <h4 className="mb-4 text-xl font-semibold text-gray-500">
          Now you can master the art of story telling.
        </h4>
        <h4 className="mb-4 text-xl font-semibold text-gray-500">
          Don&apos;t forget to read those books😇.
        </h4>
        <UIStyledButton handleClick={handleHomeRedirect}>
          <ButtonText>Back to home</ButtonText>
        </UIStyledButton>
      </div>
    </div>
  );
};

export default Checkout;

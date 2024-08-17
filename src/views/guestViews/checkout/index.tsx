import Image from "next/image";

const Checkout = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center p-4">
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
    </div>
  );
};

export default Checkout;

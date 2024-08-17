import Link from "next/link";

const ProductHeader = () => {
  return (
    <div className="relative px-4 border-b pb-2 flex items-center justify-between">
      <Link href="/" passHref>
        <span className="transform -translate-x-1 text-gray-500 font-semibold text-lg flex items-center space-x-2 hover:text-gray-700 transition-colors duration-300">
          &lt; Back
        </span>
      </Link>
      <h4 className="text-2xl font-bold text-gray-700 text-center flex-1">
        My Cart
      </h4>
    </div>
  );
};

export default ProductHeader;

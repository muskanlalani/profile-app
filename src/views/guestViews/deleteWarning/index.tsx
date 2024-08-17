import UIStyledButton from "@/components/UIComponents/UIStyledButton";
import UIStyledDialog from "@/components/UIComponents/UIStyledDialog";
import Image from "next/image";
import { useProductContext } from "../../../../context/ProductContext";

const DeleteWarning = () => {
  const { handleDeleteProduct, openWarningDeleteId, handleRemoveWarningClose } =
    useProductContext();

  return (
    <UIStyledDialog>
      <button className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 focus:outline-none">
        <Image src="/images/cross.svg" height={24} width={24} alt="cross" />
      </button>

      <h2 className="text-xl font-bold mb-4">
        Are you sure you want to remove product?
      </h2>
      <div className="flex items-center justify-center gap-4">
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 focus:outline-none"
          onClick={handleRemoveWarningClose}
        >
          <Image src="/images/cross.svg" height={24} width={24} alt="cross" />
        </button>
        <button
          onClick={handleRemoveWarningClose}
          className="bg-gray-500 text-white border-b-4 border-gray-600 
             hover:bg-gray-600 hover:border-gray-700 font-bold 
             py-2 px-4 rounded w-full max-w-[220px] shadow-md 
             transition-all duration-300 ease-in-out"
        >
          <p className="block  font-sans text-sm antialiased font-semibold leading-snug tracking-normal text-blue-gray-900 truncate max-w-xs">
            Cancel
          </p>
        </button>

        <UIStyledButton
          handleClick={() => handleDeleteProduct(openWarningDeleteId)}
        >
          <p className="block  font-sans text-sm antialiased font-semibold leading-snug tracking-normal text-blue-gray-900 truncate max-w-xs">
            Save
          </p>
        </UIStyledButton>
      </div>
    </UIStyledDialog>
  );
};

export default DeleteWarning;

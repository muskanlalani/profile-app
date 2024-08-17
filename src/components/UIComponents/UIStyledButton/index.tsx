import { ReactNode } from "react";

const UIStyledButton = ({
  children,
  handleClick,
}: {
  children: ReactNode;
  handleClick: () => void;
}) => {
  return (
    <button
      onClick={handleClick}
      className="bg-primary text-white border-b-4 border-primaryContrast hover:bg-primaryContrast
       font-bold py-2 px-4 rounded w-full  max-w-[220px] "
    >
      {children}
    </button>
  );
};

export default UIStyledButton;

import { ReactNode } from "react";

const ButtonText = ({ children }: { children: ReactNode }) => {
  return (
    <p className="block font-sans text-sm antialiased font-semibold leading-snug tracking-normal text-blue-gray-900 truncate max-w-xs">
      {children}
    </p>
  );
};

export default ButtonText;

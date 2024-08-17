import { ReactNode } from "react";

const UIStyledDialog = ({ children }: { children: ReactNode }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 px-4">
      <div className="relative bg-white p-6 rounded-lg shadow-lg max-w-sm w-full text-center">
        {children}
      </div>
    </div>
  );
};

export default UIStyledDialog;

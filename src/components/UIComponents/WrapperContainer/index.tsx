import { ReactNode } from "react";

const WrapperContainer = ({ children }: { children: ReactNode }) => {
  return <div className="p-[12px]">{children}</div>;
};

export default WrapperContainer;

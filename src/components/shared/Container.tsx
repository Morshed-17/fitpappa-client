import { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
  return <div className="max-w-screen-xl px-4 md:px-8 lg:px-12 mx-auto">{children}</div>;
};

export default Container;

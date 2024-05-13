import { ReactNode } from 'react';

export const Header = ({ children }: { children: ReactNode }) => {
  return <div className="w-full">{children}</div>;
};

import { ReactNode } from 'react';

export const Header = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-full py-5 sm:px-10 px-5 flex justify-between items-center">
      {children}
    </div>
  );
};

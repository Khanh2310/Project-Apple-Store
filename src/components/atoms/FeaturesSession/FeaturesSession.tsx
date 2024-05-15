import { ReactNode } from 'react';

type Props = {
  className: string;
  children: ReactNode;
};

export const FeaturesSession = ({ children, className }: Props) => {
  return <section className={className}>{children}</section>;
};

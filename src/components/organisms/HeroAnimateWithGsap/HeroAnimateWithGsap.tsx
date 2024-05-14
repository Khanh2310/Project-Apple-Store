import { HeroWithText } from '@/components/molecules/HeroWithText';

type Props = {
  videoSrc: string;
};
export const HeroAnimateWithGsap = ({ videoSrc }: Props) => {
  return <HeroWithText heroTitle="iPhone 15 Pro" videoSrc={videoSrc} />;
};

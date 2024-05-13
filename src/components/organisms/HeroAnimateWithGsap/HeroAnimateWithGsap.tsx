import { HeroWithText } from '@/components/molecules/HeroWithText';

export const HeroAnimateWithGsap = ({ videoSrc }: { videoSrc: string }) => {
  return <HeroWithText heroTitle="iPhone 15 Pro" videoSrc={videoSrc} />;
};

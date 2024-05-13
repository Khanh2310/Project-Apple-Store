import { Hero } from '@/components/atoms/Hero';

type Props = {
  heroTitle: string;
  videoSrc: string;
};
export const HeroWithText = ({ heroTitle, videoSrc }: Props) => {
  return <Hero heroTitle={heroTitle} videoSrc={videoSrc}></Hero>;
};

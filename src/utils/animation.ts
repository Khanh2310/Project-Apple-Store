import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);

type Props = {
  target: string;
  animationProps: { [key: string]: string | number };
  scrollProps?: { [key: string]: string | number };
};
export const animateWithGsap = ({ ...props }: Props) => {
  const { target, animationProps, scrollProps } = props;
  gsap.to(target, {
    ...animationProps,
    scrollTrigger: {
      trigger: target,
      toggleActions: 'restart reverse restart reverse',
      start: 'top 85%',
      ...scrollProps,
    },
  });
};

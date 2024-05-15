import gsap from 'gsap';

type Props = {
  target: string;
  animationProps: { [key: string]: string };
  scrollProps: { [key: string]: string };
};
export const animateWithGsap = ({
  target,
  animationProps,
  scrollProps,
}: Props) => {
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

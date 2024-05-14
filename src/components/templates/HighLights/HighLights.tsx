import { HighLightSessionWithGsap } from '@/components/organisms/HighLightSessionWithGsap';
import { rightImg, watchImg } from '@/utils';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export const HighLights = () => {
  useGSAP(() => {
    gsap.to('#title', { opacity: 1, y: 0 });

    //duration: thời lượng animation, stagger: trì hoãn hoạt động
    gsap.to('.link', { opacity: 1, y: 0, duration: 1, stagger: 0.25 });
  }, []);

  return (
    <HighLightSessionWithGsap
      className="w-screen overflow-hidden h-full common-padding bg-zinc"
      title="Get the highlights"
      watchImg={watchImg}
      rightImg={rightImg}
    />
  );
};

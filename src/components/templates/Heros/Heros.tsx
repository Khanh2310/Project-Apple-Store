import { HeroAnimateWithGsap } from '@/components/organisms/HeroAnimateWithGsap';
import { heroVideo, smallHeroVideo } from '@/utils';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useEffect, useState } from 'react';

export const Heros = () => {
  const [videoSrc, setVideoSrc] = useState(
    window.innerWidth < 760 ? smallHeroVideo : heroVideo
  );

  const handleVideoSrcSet = () => {
    if (window.innerWidth < 760) {
      setVideoSrc(smallHeroVideo);
    } else {
      setVideoSrc(heroVideo);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleVideoSrcSet);

    return () => {
      window.removeEventListener('resize', handleVideoSrcSet);
    };
  }, []);
  useGSAP(() => {
    gsap.to('#hero', {
      opacity: 1,
      delay: 1.5,
    });
  }, []);
  return <HeroAnimateWithGsap videoSrc={videoSrc} />;
};

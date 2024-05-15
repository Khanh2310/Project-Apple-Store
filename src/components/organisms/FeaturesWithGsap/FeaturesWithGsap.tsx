import { FeaturesSession } from '@/components/atoms/FeaturesSession';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export const FeaturesWithGsap = () => {
  useGSAP(() => {
    gsap.to('#features_title', {
      opacity: 1,
      delay: 2,
    });
  }, []);
  return (
    <FeaturesSession className="relative h-full common-padding bg-zinc overflow-hidden">
      <div className="screen-max-width">
        <div className="mb-12 w-full">
          <h1 id="features_title" className="section-heading">
            Explore the full story.
          </h1>
        </div>
      </div>
    </FeaturesSession>
  );
};

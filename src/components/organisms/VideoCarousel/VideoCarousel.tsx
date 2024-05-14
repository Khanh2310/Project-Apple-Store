import { Carousels } from '@/components/atoms/Carousels';
import { hightlightsSlides } from '@/utils/constants';

export const VideoCarousel = () => {
  return (
    <Carousels className="flex items-center">
      {hightlightsSlides.map((list) => (
        <div className="" key={list.id} id="slider"></div>
      ))}
    </Carousels>
  );
};

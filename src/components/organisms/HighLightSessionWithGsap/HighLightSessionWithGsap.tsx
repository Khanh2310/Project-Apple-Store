import { HighLightSession } from '@/components/atoms/HighLightSession';

type Props = {
  className: string;
  title: string;
  watchImg: string;
  rightImg: string;
};
export const HighLightSessionWithGsap = ({
  className,
  title,
  watchImg,
  rightImg,
}: Props) => {
  return (
    <HighLightSession
      className={className}
      title={title}
      watchImg={watchImg}
      rightImg={rightImg}
    />
  );
};

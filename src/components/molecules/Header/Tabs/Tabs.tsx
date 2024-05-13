import { Tab } from '@/components/atoms/Tab';
type Props = {
  appleImg: string;
  searchImg: string;
  bagImg: string;
  device: string[];
};
export const Tabs = ({ appleImg, bagImg, searchImg, device }: Props) => {
  return (
    <Tab
      appleImg={appleImg}
      bagImg={bagImg}
      searchImg={searchImg}
      device={device}
    ></Tab>
  );
};

import { Header } from '@/components/molecules/Header';
import { Tabs } from '@/components/molecules/Header/Tabs';
import { HeroWithText } from '@/components/molecules/HeroWithText';
import { appleImg, bagImg, searchImg } from '@/utils';
import { navLists } from '@/utils/constants';

export const BasicLayout = () => {
  return (
    <main className="bg-black">
      <Header>
        <Tabs
          appleImg={appleImg}
          searchImg={searchImg}
          bagImg={bagImg}
          device={navLists}
        ></Tabs>
      </Header>
      <HeroWithText heroTitle="iPhone 15 Pro" />
    </main>
  );
};

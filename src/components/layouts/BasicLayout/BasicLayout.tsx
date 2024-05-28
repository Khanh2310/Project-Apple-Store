import { Header } from '@/components/molecules/Header';
import { Tabs } from '@/components/molecules/Header/Tabs';
import { Features } from '@/components/templates/Features';
import { Footer } from '@/components/templates/Footer';
import { Heros } from '@/components/templates/Heros';
import { HighLights } from '@/components/templates/HighLights';
import { HowIsWorks } from '@/components/templates/HowIsWorks';
import { Model } from '@/components/templates/Model';

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
        />
      </Header>
      <Heros />
      <HighLights />
      <Model />
      <Features />
      <HowIsWorks />
      <Footer/>
    </main>
  );
};

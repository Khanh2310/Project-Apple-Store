import { Header } from '@/components/molecules/Header';
import { Tabs } from '@/components/molecules/Header/Tabs';
import { Heros } from '@/components/templates/Heros';
import { HighLights } from '@/components/templates/HighLights';

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
      <Heros />
      <HighLights/>
    </main>
  );
};

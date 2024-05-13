import { Hero } from './components/atoms/Hero';
import { Tab } from './components/atoms/Tab';
import { Header } from './components/molecules/Header';
import { appleImg, bagImg, searchImg } from './utils';

export const App = () => {
  const device = ['Phones', 'Macbooks', 'Tablets'];
  return (
    <main className="bg-black">
      <Header>
        <Tab
          appleImg={appleImg}
          bagImg={bagImg}
          searchImg={searchImg}
          device={device}
        ></Tab>
      </Header>
      <Hero />
    </main>
  );
};

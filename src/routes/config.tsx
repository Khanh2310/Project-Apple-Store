import { BasicLayout } from '@/components/layouts/BasicLayout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export const RouterConfig: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BasicLayout />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

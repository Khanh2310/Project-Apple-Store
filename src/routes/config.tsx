import { BasicLayout } from '@/components/layouts/BasicLayout';
import { NotFound } from '@/pages/404';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export const RouterConfig: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BasicLayout />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

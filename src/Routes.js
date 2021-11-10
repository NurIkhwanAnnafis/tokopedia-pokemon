import React, { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Routes as Switch, Route } from 'react-router-dom';
import { menu } from './configs/routes';
import Layout from './components/Layout';

const Index = () => {
  const global = useSelector((state) => state.global);

  return (
    <Layout {...global}>
      <Switch>
        {menu.map(detail => (
          <Route 
            path={detail.path}
            element={
              <Suspense fallback={null}>
                <detail.component />
              </Suspense>
            }
          />
        ))}
      </Switch>
    </Layout>
  )
}

export default Index;
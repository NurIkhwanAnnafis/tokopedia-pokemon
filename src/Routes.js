import React, { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Routes as Switch, Route } from 'react-router-dom';
import { menu } from './configs/routes';
import Layout from './components/Layout';
import './styles/app.scss';

const Index = () => {
  const global = useSelector((state) => state.global);
  const pokemon = useSelector((state) => state.pokemon);

  return (
    <Layout {...global}>
      <Switch>
        {menu.map(detail => (
          <Route
            key={detail.path}
            path={detail.path}
            element={
              <Suspense fallback={null}>
                <detail.component {...pokemon} />
              </Suspense>
            }
          />
        ))}
      </Switch>
    </Layout>
  )
}

export default Index;
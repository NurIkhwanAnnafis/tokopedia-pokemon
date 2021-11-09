import React, { Suspense } from 'react';
import { Provider } from 'react-redux';
import { Routes as Switch, Route } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { menu } from './configs/routes';
import persistor from './store/persistor';
import store from './store/store';
import Layout from './components/Layout';

const Index = () => {

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Layout>
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
      </PersistGate>
    </Provider>
  )
}

export default Index;
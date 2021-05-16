import React from 'react';
import { Route } from "react-router";
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import './App.css';
import { ConfigProvider } from 'antd';
import Main from './containers/Main/Main';
import { AppWrapper } from './App.styled';
import createStore from './data/store';
import Footer  from './components/Footer';
import Navbar from './components/Navbar';
import Emerging from './containers/Emerging'


const routes = [
  { path: "/", component: Main, isExact: true },
  { path: "/pi-emerging", component: Emerging, isExact: true }
];

function App() {
  return (
    <Provider store={createStore()}>
      <ConfigProvider direction="rtl">
        <AppWrapper>
        <div className="page-wrapper">
          <Navbar/>
          <BrowserRouter>
            {routes.map(route => (
              <Route
                exact={route.isExact}
                key={route.path}
                path={route.path}
                component={route.component}
              />
            ))
            }
          </BrowserRouter>
          <Footer/>
          </div>
        </AppWrapper>
      </ConfigProvider>
    </Provider>
  );
}

export default App;

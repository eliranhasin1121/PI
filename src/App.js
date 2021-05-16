import { ConfigProvider } from 'antd';
import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import './App.css';
import { AppWrapper } from './App.styled';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Cohen from './containers/Cohen';
import Emerging from './containers/Emerging';
import Main from './containers/Main/Main';
import opportunities from './containers/Oppourtiunities';
import createStore from './data/store';

const routes = [
  { path: "/", component: Main, isExact: true },
  { path: "/pi-emerging", component: Emerging, isExact: true },
  { path: '/pi-opportunities',component: opportunities, isExact:true },
  { path:'/cohen-and-kaye',component: Cohen, isExact:true }
];

function App() {

  useEffect(() => {

  },[])

  return (
    <Provider store={createStore()}>
      <ConfigProvider direction="rtl">
        <AppWrapper>
        <div className="page-wrapper">
        <BrowserRouter>
          <Navbar/>
            {routes.map(route => (
              <Route
                exact={route.isExact}
                key={route.path}
                path={route.path}
                component={route.component}
              />
            ))
            }
            <Footer/>
          </BrowserRouter>
          </div>
        </AppWrapper>
      </ConfigProvider>
    </Provider>
  );
}

export default App;

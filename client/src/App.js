import React from "react";
import { BrowserRouter } from "react-router-dom";
import Layout from "./layout/Layout";
import Router from "./routes/Router";

import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import userReducer from "./redux/reducers"
import userSaga from "./redux/sagas"


const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    users: userReducer
  },
  middleware: [sagaMiddleware],
});
sagaMiddleware.run(userSaga)

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout>
          <Router/>
        </Layout>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

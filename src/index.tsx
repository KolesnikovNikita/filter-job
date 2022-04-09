import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import { store } from './init/store';
import { Routes, Route,BrowserRouter } from "react-router-dom";
import MainPage from './Pages/App';
import Jobs from './Pages/Jobs';
import Specialist from './Pages/Specialist'
import Salaries from './Pages/Salaries';
import Companies from './Pages/Companies';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='jobs' element={<Jobs />} />
        <Route path='specialist' element={<Specialist />} />
        <Route path='companies' element={<Companies />} />
        <Route path='salaries' element={<Salaries />} />
      </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

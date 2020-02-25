import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import Login from './component/auth/login'
// import S from './component/signup'
// import D from './component/dashboard/Dashboard'
import Nav from './navigation'
// import Users from './component/mainscreen/users'
import { Provider } from 'react-redux';
import store from './redux/store'

function App() {
  return (
    <div >
      {/* < Login /> */}
      <Provider store={store}>
        <Nav />
      </Provider>
      {/* <Users /> */}
    </div>
  );
}

export default App;

import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import Login from './component/auth/login'
// import S from './component/signup'
// import D from './component/dashboard/Dashboard'
import Nav from './navigation'
import Users from './component/mainscreen/users'

function App() {
  return (
    <div >
      {/* < Login /> */}
     <Nav />
     <Users />
    </div>
  );
}

export default App;

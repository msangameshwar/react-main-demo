import { useState } from 'react';
import Navbar from './components/Navbar';
import LoginForm from './components/pages/Login';
import Register from './components/pages/Register';

const App = () => {
  const [showLogin, setShowLogin] = useState(true);

  const toggleForm = () => {
    setShowLogin(!showLogin);
  };

  return (
    <>
      <Navbar toggleForm={toggleForm} showLogin={showLogin} />
      {showLogin ? <LoginForm /> : <Register />}
    </>
  );
};

export default App;

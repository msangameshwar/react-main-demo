import { useState } from 'react';
import Navbar from './components/Navbar';
import LoginForm from './components/LoginForm';
import Register from './components/Register';

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

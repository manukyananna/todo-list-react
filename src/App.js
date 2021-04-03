import { useSelector } from 'react-redux';
import './App.css';
import BaseLayout from './Layouts/BaseLayout/baseLayout';
import SignIn from './Pages/SignIn/signIn';

const App = () => {
  const user = useSelector(state => state.user.currentUser);
  return user ? <BaseLayout /> : <SignIn />;
}

export default App;

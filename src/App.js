import './App.css';
import Chat from './comp/Chat';
import SignIn from './comp/SignIn';
import { auth } from "./firbase.js"
import { useAuthState } from 'react-firebase-hooks/auth';

function App() {

  //to check if we are signin , it return true if signin
  const [user] = useAuthState(auth);
  return (
    <>
      {/* if user is ture(if user is signin), it show chat page */}
      {user ? <Chat /> : <SignIn />}

    </>
  );
}

export default App;

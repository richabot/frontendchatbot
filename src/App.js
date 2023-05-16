
import './App.css';
import { Route, Routes } from 'react-router-dom';
import CustomizationPage from './component/CustomizationPage';
import ChatbotPage from './component/ChatbotPage';
import SignUp from './component/SignUp';
import SignIn from './component/SignIn';
import Navbar from './component/Navbar';
import Auth from './component/Auth';

function App() {
  return (
    <div className="App">
      <Navbar/>
       <Routes>
       <Route
					path="/"
					element={
						<Auth>
							<CustomizationPage/>
						</Auth>
					}
				/>

<Route path="/signup"  element={<SignUp/>} />
<Route path="/signin"  element={<SignIn/>} />
      <Route path="/:userId" element={<ChatbotPage/>} />
  
     </Routes>
    </div>
  );
}

export default App;


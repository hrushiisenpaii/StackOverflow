import { BrowserRouter as Router} from 'react-router-dom'
import { useEffect } from 'react';
import './App.css';
import AllRoutes from './AllRoutes';
import { fetchAllQuestions } from './actions/question';
import { useDispatch } from 'react-redux';
import { fetchAllUsers } from './actions/users';
//import Navbar from './components/Navbar/Navbar'

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAllQuestions())
    dispatch(fetchAllUsers())
  },[dispatch])

  return (
    <div className="App">
      <Router>
        <AllRoutes />
      </Router>
    </div>
  );
}

export default App;

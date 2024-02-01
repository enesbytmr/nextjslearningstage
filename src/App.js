import './App.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Todo } from './pages/TodoApp';
import Fetch from './pages/fetch';

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path='/' element={<Todo />}/>
                    
                    <Route path='/blabla' element={<Fetch />}/>
                </Routes>
            </Router>
        </div>
    )
}

export default App;

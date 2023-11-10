import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Article from './components/Article';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<Home />}/>
        <Route path='/home' element={<Home />}/>
        <Route path='/article/:id' element={<Article />}/>
      </Routes>
    </div>
  );
}

export default App;

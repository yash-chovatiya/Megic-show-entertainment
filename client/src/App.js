import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Blog from './Pages/blog/Blog';
import Single from './components/single/Single';
import WritePost from './Pages/WritePost/WritePost';
import Profile from './Pages/Profile/Profile';
import Login from './Pages/login/Login';
import Register from './Pages/register/Register'
import { useContext } from 'react';
import { Context } from './context/Context';
import TicTacToe from './Pages/tictactoe/TicTacToe';
import MemoryGame from './Pages/memorygame/MemoryGame';
import Game2048 from './Pages/2048/Game2048';
import Candycrush from './Pages/candycrush/Candycrush';
import MoviePage from './Pages/moviepage/MoviePage';
import Watchmovie from './components/watchmovie/Watchmovie';
import Games from './Pages/games/Games';
import Home from './Pages/home/Home';

function App() {
  const { user } = useContext(Context);
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={user ? <Home /> : < Login />}></Route>
        <Route path='/register' element={user ? <Home /> : < Register />}></Route>
        <Route path='/blog' element={user ? <Blog /> : < Login />}></Route>
        <Route path='/writepost' element={user ? <WritePost /> : < Login />}></Route>
        <Route path='/profile' element={user ? <Profile /> : < Login />}></Route>
        <Route path='/post/:postID' element={user ? <Single /> : < Login />}></Route>
        <Route path='/games/tictactoe' element={user ? <TicTacToe /> : < Login />}></Route>
        <Route path='/games/memorygame' element={user ? <MemoryGame /> : < Login />}></Route>
        <Route path='/games/2048' element={user ? <Game2048 /> : < Login />}></Route>
        <Route path='/games/candycrush' element={user ? <Candycrush /> : < Login />}></Route>
        <Route path='/movies' element={user ? <MoviePage /> : < Login />}></Route>
        <Route path='/watchmovie/:id' element={user ? <Watchmovie /> : < Login />}></Route>
        <Route path='/games' element={user ? <Games /> : < Login />}></Route>
        <Route path='/home' element={user ? <Home /> : < Login />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// index.tsx

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Menu from './index';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Menu />} />
        {/* <Route path="/maze2" element={<Maze2Game />} />
        <Route path="/minesweeper" element={<MinesweeperGame />} />
        <Route path="/othello2" element={<Othello2Game />} /> */}
      </Routes>
    </Router>
  );
};
export default App;

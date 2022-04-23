import { Routes, Route } from 'react-router-dom';
import About from './components/About/About';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';
import Error from './components/Error/Error';

function App() {
  return (
    <>
      <Routes>
        {/* Switch */}
        <Route path="/" element={<Dashboard />} />{' '}
        {/* <Route path="/" component={Dashboard} /> */}
        {/* <Route path="about" element={<About />} />
        <Route path="about/:user" element={<About />} /> */}
        <Route path="about">
          <Route path=":user" element={<About />} />
          <Route path="" element={<About />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;

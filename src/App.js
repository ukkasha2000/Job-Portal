import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Name from './components/Name';
import Email from './components/Email';
import JobRole from './components/JobRole';
import DateOfBirth from './components/DateOfBirth';
import Password from './components/Password';
import Home from './components/Home';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Name />} />
          <Route path='email' element={<Email />} />
          <Route path='jobrole' element={<JobRole />} />
          <Route path='dob' element={<DateOfBirth />} />
          <Route path='password' element={<Password />} />
          <Route path='home' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

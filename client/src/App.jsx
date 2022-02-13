import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { Container } from 'reactstrap';
import { checkAuth } from './Redux/Actions/AsyncAction';
import MainLayout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Posts from './pages/Posts/Posts';
import Registration from './pages/Registration/Registration';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkAuth());
  }, []);

  return (
    <Container fluid>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="signup" element={<Registration />} />
          <Route path="signin" element={<Login />} />
          <Route path="posts" element={<Posts />} />
        </Routes>
      </MainLayout>
    </Container>
  );
}
export default App;

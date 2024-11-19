import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Spinner from './components/Spinner';
import Results from './components/Results';

const AppRoutes = ({ data }) => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/results" element={<Results data={data} />} />
    </Routes>
  );
};

const App = () => {
  const [loading, setLoading] = useState(false);
  const [data] = useState(null);
  const navigate = useNavigate();

  const handleUpload = async (file) => {
    setLoading(true);

    try {
      // const fileURL = encodeURIComponent(file.name);

      // const response = await fetch(`http://localhost:8000/upload?file=${fileURL}`, {
      //   method: 'GET',
      // });

      // if (!response.ok) {
      //   throw new Error('Failed to execute the notebook');
      // }

      // const resultData = await response.json();
      // setData(resultData);
      navigate('/results');
    } catch (error) {
      console.error('Error during upload:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar onUpload={handleUpload} setLoading={setLoading} />
      {loading ? (
        <Spinner />
      ) : (
        <AppRoutes data={data} />
      )}
    </>
  );
};

const MainApp = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default MainApp;
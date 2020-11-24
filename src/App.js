import React, { Component, useState, useEffect } from 'react';
import './App.css';
import axios from 'axios'
import Header from './components/Header'
import ListArticle from './components/ListArticle'
import 'bootstrap/dist/css/bootstrap.min.css';

function App () {
  const [state, setState] = useState({
    colors: [],
    isLoading: true
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const result = await axios.get("http://localhost:5000/api/v1/get-colors");
    console.log(result.data.body);
    setState({ ...state, colors: result.data.body, isLoading: false });
  };

  return (
    <div className="App">
      <Header />
      {!state.isLoading ? <ListArticle colors={state.colors} /> : <h3>Loading...</h3>}
    </div>
  );
}

export default App;
import React from 'react';
import Header from './Header/Header';
import Post from './Post';
import CreateNewAccount from './CreateNewAccount';
import SignIn from './SignIn/SignIn';
import Article from './Article/Article';
import './App.css';

function App() {
  return (
    <div>
      <Article />
      <SignIn />
      <CreateNewAccount />
      <Header />
      <Post />
    </div>
  );
}

export default App;

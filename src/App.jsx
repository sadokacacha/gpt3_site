import './App.css';
import {
  Footer,
  Blog,
  Possiblity,
  Features,
  WhatGPT3,
  Header,
} from './containers';
import { Cta, Brand, NavBar } from './components';

function App() {
  return (
    <div className="app">
      <div className="gradient_Bg">
        <NavBar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <WhatGPT3 />
      <Possiblity />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;

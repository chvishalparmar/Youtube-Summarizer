import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';

function App() {
  return (

    <>
   <Navbar title="Youtube Summarizer"/>
    <TextForm heading="Paste Youtube Link Here "/>
    </>
    
  );
}

export default App;

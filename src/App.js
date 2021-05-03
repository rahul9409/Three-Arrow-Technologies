import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Content from './components/Content';
import Project from './components/Project'
import UnderProject from './components/UnderProject';
import Video from './components/Video';
function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    <Content/>
    <Project/>
    <br/><br/>
    <UnderProject/>
    <Video/>
    </>
  );
}

export default App;

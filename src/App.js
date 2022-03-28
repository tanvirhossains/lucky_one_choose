import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Collection from './Components/Collection/Collection';
import Answer from './Components/Qus&Ans/Answer';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Collection></Collection>
      <Answer></Answer>
    </div>
  );
}

export default App;

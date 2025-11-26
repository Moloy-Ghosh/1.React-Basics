import logo from './logo.svg';
import './App.css';
import BioData from './components/BioData.jsx';
import Writing from './components/Writing.jsx';
import ThankYou from './components/ThankYou.jsx';
function App() {
  return (
    <div>
      <BioData />
      <ThankYou />
      <Writing />
      <ThankYou />
    </div>
  );
}

export default App;

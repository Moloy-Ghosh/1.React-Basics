import './App.css';
import BioData from './component/BioData.jsx';

function App() {
  return (
    <div className="App">
      <BioData
      name="Moloy"
      phone="01780303302"
      email="moloy.ghosh.cse@gmail.com"
      skills={["html","css","javascript"]}
      interests={["Football","cricket"]}
      socialLinks={[{sname:"Facebook",link:"fb/moloyg"},{sname:"twitter",link:"x/moloy"}]}
       />

<BioData
      name="Roney"
      phone="01399999999"
      email="roney@gamil.com"
      skills={["football","communication"]}
      interests={["football","cricket","bollyball"]}
      socialLinks={[{sname:"fb",link:"fb/rny"},{sname:"insta",link:"insta/rny"},{sname:"twitter",link:"x/rny"}]}
       />

<BioData
      name="Rakib"
      phone="01982900000"
      email="sakib@gmail.com"
      skills={["dancing","communication","modeling","teacing","drawing"]}
      interests={["movies","song"]}
      socialLinks={[{sname:"fb",link:"fb/sakib68"}]}
       />

       <h3>Thank you</h3>
    </div>
  );
}

export default App;

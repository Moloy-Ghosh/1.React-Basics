import BioData from './components/BioData';
import './App.css';

const bioData=[
   {
      name:"Moloy Ghosh",
      email:"moloy@gmail.com",
      phone:"01780303302",
      skill:["js","react","html"],
      socialLinks:[
         {header:"Facebook",link:"fb/moloy"},
         {header:"Instagram",link:"insta/mg"},
         {header:"Twitter",link:"x/mly"}
      ]
   },
   {
      name:"Turjo Ghosh",
      email:"turjo@gmail.com",
      phone:"01780399002",
      skill:["js","html"],
      socialLinks:[
         {header:"Facebook",link:"fb/trj"},
         {header:"Instagram",link:"insta/turjo5550"},
         {header:"Twitter",link:"x/ttu343"}
      ]
   },
   {
      name:"Nobin Biswash",
      email:"nobin@gmail.com",
      phone:"01747590399",
      skill:["dancing","modeling","acting"],
      socialLinks:[
         {header:"Facebook",link:"fb/nobin42"},
         {header:"Instagram",link:"insta/nbin"},
         {header:"Twitter",link:"x/nob345"}
      ]
   }
]

function App() {
  return (
    <div className="App">
      <>
      {bioData.map((singleBD)=>(
         <BioData
         name={singleBD.name}
         phone={singleBD.phone}
         email={singleBD.email}
         skills={singleBD.skill}
         socialLinks={singleBD.socialLinks}
         />
      ))}
      </>
    </div>
  );
}

export default App;

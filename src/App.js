import React from 'react';
import logo from './logo.svg';
import './App.css';
import Side from './components/molecules/Side'
import BothSides from './components/organisms/BothSides'
import renderSides from './data/side-api'
import Footer from './components/organisms/Footer'
import SelectBreed from './components/organisms/SelectBreed'

function App() {
  return (
    <div className="App">
      {/* <BothSides renderSides={renderSides} /> */}
      {/* <Side 
        bgColor="#23b2e3"
        language="PT"
        title="ta com dúvida no tamanho?"
        subtitle="relaxa que a gente te ajuda!"
        imgButton="/img/button-pt.png"
      />
       <Side 
        bgColor="#fa7b24"
        language="EN"
        title="ta com dúvida no tamanho?"
        subtitle="relaxa que a gente te ajuda!"
        imgButton="/img/button-en.png"
      /> */}
      <SelectBreed />
      <Footer />
    </div>
  );
}

export default App;

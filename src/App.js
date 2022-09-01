import React from 'react'
import Menu from './componentes/Menu'
import BannerMain from './componentes/BannerMain'
import Carousel from './componentes/Carousel'
import Footer from './componentes/Footer'
import dadosIniciais from './data/dados_iniciais.json'

function App() {
  return (
    <div>
      <Menu />
      <BannerMain />

      <Carousel />
      <Carousel />

      <Footer />


    </div>
  );
}

export default App;

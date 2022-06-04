import React from 'react';
import Header from './components/organisms/Header';
import Footer from './components/organisms/Footer';
import Contrast from './components/organisms/Contrast';
import PurchaseModal from './components/organisms/PurchaseModal';
import { Container } from './styles/styles';
import { ModalProvider } from './context';
import Carousel from './components/molecules/Carousel';

function App() {
  return (
    <ModalProvider>
      <Container>
        <Header />
        <Carousel />
        <Contrast />
        <Footer />
        <PurchaseModal />
      </Container>
    </ModalProvider>
  );
}

export default App;

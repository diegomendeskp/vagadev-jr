import React from 'react';
import Header from './components/organisms/Header';
import Footer from './components/organisms/Footer';
import Contrast from './components/organisms/Contrast';
import PurchaseModal from './components/organisms/PurchaseModal';
import { Container } from './styles/styles';
function App() {
  return (
    <Container>
      <Header />
      <Contrast />
      <Footer />
      <PurchaseModal />
    </Container>
  );
}

export default App;

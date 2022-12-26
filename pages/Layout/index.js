import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ScrollToTop from '../../components/ScrollToTop';

const Index = ({children}) => {
  return (
    <div className='relative w-full'>
        <Header />
        {children}
        <ScrollToTop />
        <Footer />
    </div>
  )
}

export default Index
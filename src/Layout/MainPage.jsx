import React, { useState, useEffect } from 'react';
import Header from '../Components/SharedComponents/Header/Header';
import Footer from '../Components/SharedComponents/Footer/Footer';
import { Outlet } from 'react-router-dom';
import Popup from '../Components/Popup/Popup';

const MainPage = () => {
  const [shouldShowPopup, setShouldShowPopup] = useState(false);

  useEffect(() => {
    const hasPopupBeenShown = localStorage.getItem('hasPopupBeenShown');

    if (!hasPopupBeenShown) {
      setShouldShowPopup(true);
      localStorage.setItem('hasPopupBeenShown', 'true');
    }
  }, []);

  const handleClosePopup = () => {
    setShouldShowPopup(false);
  };

  return (
    <>
      <Header />
      <div className='min-h-[calc(100vh-140px)]'>
        <Outlet />
      </div>
      <Footer />
      {shouldShowPopup && <Popup onClose={handleClosePopup} />}
    </>
  );
};

export default MainPage;

import React, { useState, useEffect } from 'react';

const Popup = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [countdown, setCountdown] = useState(20);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
    }, 1000);

    const closeTimeout = setTimeout(() => {
      setIsVisible(false);
      clearInterval(timer);
    }, 20000);

    return () => {
      clearInterval(timer);
      clearTimeout(closeTimeout);
    };
  }, []);

  const handleClosePopup = () => {
    setIsVisible(false);
  };

  return (
    <div className={`fixed inset-0 flex items-center justify-center z-50 ${isVisible ? 'block' : 'hidden'}`}>
      <div className="bg-white p-6 rounded shadow-lg">
        <p className="mb-4 text-xl">Terms and Conditions</p>
        <ul className='mb-4 max-w-3xl text-lg'>
          <li> 1. <span className='font-semibold mb-2'>Acceptance of Terms</span>  <br />
            By accessing and using this website, you agree to comply with and be bound by these Terms and Conditions. If you do not agree with these terms, please do not use this website.</li>
          <li>2. <span className='font-semibold mb-2'> Website Content</span>  <br />
            a. All content on this website, including but not limited to text, images, videos, and other materials, is the property of SIMT and is protected by copyright and other intellectual property laws.
            b. You may use the content for personal, non-commercial purposes, but you may not reproduce, distribute, or modify the content without written permission from SIMT.</li>
          <li>3. <span className='font-semibold mb-2'> User Accounts</span>  <br />
            a. If you create a user account on this website, you are responsible for maintaining the confidentiality of your account information.
            b. You are also responsible for all activities that occur under your account.</li>
          <li>
            4.<span className='font-semibold mb-2'>Privacy Policy</span>  <br />
            Your use of this website is subject to our Privacy Policy, which outlines how we collect, use, and protect your personal information.
          </li>
          <li>
            5. <span className='font-semibold mb-2'>User Conduct</span> <br />
            You agree to use this website for lawful purposes only and not to engage in any activity that violates applicable laws or infringes on the rights of others.
          </li>
        </ul>
        <p>









        </p>
        <div className="flex justify-between">
          <div className='text-red-500 text-sm'>{`Closing in ${countdown} seconds`}</div>
          <button onClick={handleClosePopup} className="px-4 py-2 bg-blue-500 text-white rounded">
            Accept & Understand
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;

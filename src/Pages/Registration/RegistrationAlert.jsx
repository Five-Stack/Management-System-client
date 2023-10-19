import React, { useEffect, useState } from 'react';

const RegistrationAlert = () => {
    const [height, setHeight] = useState(0);
    const [showAlert, setShowAlert] = useState(true);
    const [hidden, setHidden] = useState(false)

    const handleOverflow = () => {
        document.body.style.overflow = 'auto'
    }

    const handleAlert = () => {
        setShowAlert(false)
        setTimeout(() => setHidden(true), 200)  
        handleOverflow()
    }

    useEffect(() => {
        const bodyHeight = document.body.clientHeight;
        const body = document.body;
        body.style.overflow = 'hidden'
        setHeight(bodyHeight);
        window.scrollTo(0, 0);
    }, []);
    return (


        <div className={`${hidden && 'hidden'}`}>
            <div className='w-full bg-black opacity-40 absolute top-0 left-0 z-30' style={{ height: `${height}px` }}>
            </div>
            <div className={`bg-white w-11/12 md:max-w-[900px] h-[300px] overflow-y-auto p-7 md:p-10 rounded-xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 ${showAlert ? 'block' : 'opacity-0 transition-opacity duration-200'}`}>
                <svg onClick={handleAlert} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 absolute right-3 top-3 md:right-5 md:top-5 hover:text-blue-700 transition-colors duration-150">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
                <h2 className='text-3xl text-black font-bold mb-7'>Alert Title</h2>
                <p className='leading-normal txt-black text-justify'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
                </p>
            </div>
        </div>


    );
};

export default RegistrationAlert;
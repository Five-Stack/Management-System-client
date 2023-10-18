import { useState } from "react";


const Alert = () => {
    const [showAlert, setShowAlert] = useState(true);
    const [hidden, setHidden] = useState(false)

    const handleAlert = () => {
        setShowAlert(false)

        setTimeout(() => setHidden(true),200)
    }
    return (

        <div className={`h-[284px] bg-[#DCE1EE] mx-auto mt-10 rounded-2xl flex justify-center items-center px-4 relative ${showAlert ? 'block' : 'opacity-0 transition-opacity duration-200'} ${hidden && 'hidden'} `}>

            <svg onClick={handleAlert} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 absolute right-5 top-5 hover:text-red-500 transition-colors duration-150">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
            
            <p className="text-center text-lg font-medium text-[#4B537D]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not o</p>
        </div>

    );
};

export default Alert;
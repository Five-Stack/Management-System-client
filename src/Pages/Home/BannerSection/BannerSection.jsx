import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FaGraduationCap } from 'react-icons/fa6';
import BannerCard from './BannerCard';
import { Link } from 'react-router-dom';
import './fadeEffect.css'

function BannerSection() {
    const [imageUrls, setImageUrls] = useState([]);
    const [prevIndex, setPrevIndex] = useState(1);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [imageOpacity, setImageOpacity] = useState(1);
    
    useEffect(() => {
        const updateImage = () => {
            setPrevIndex(prevIndex + 1)
            setCurrentImageIndex(prevIndex % imageUrls.length)
            setImageOpacity(0);

            setTimeout(() => {
                setImageOpacity(1);
            }, 150);
        };

        const interval = setInterval(updateImage, 6000);

        return () => {
            clearInterval(interval);
        };
    }, [imageUrls]);

    useEffect(() => {
        // Load the current image when the index changes
        const fetchImage = () => {
            try {
                axios.get('https://management-system-server.vercel.app/api/sliderbgs')
                    .then(data => setImageUrls(data.data))
            } catch (error) {
                console.error('Error fetching image:', error);
            }
        };

        fetchImage();
    }, [currentImageIndex]);


    return (
        <>
            <div className='w-full h-[400px] lg:h-[543px] relative'>
                <img className='h-full object-cover md:object-fill fade' src={imageUrls[currentImageIndex]?.bannerImg} alt="" style={{ opacity: imageOpacity }}/>
                <div className="h-full w-full bg-gradient-to-r from-[rgba(255,255,255,1)] to-transparent absolute top-0 left-0">
                    <div className="lg-container h-full w-full">
                        <div className="h-full flex flex-col justify-center items-center md:items-start">
                            <h1 className='text-[#1B2637] text-3xl lg:text-[42px] lg:w-[60%] text-center lg:text-left font-bold'><span className='text-[#2A76E7] leading-snug'>সাইক</span> ইনস্টিটিউট অব মেনেজমেন্ট এন্ড টেকনোলজি </h1>
                            <p className='text-xl mt-4'>Best Polytechnic Institute In Dhaka</p>
                            <Link to={'/admission'}>
                                <button className='bg-primary hover:bg-blue-700 txt-white mt-10 px-5 py-3 rounded-md flex items-center transition-colors duration-100'>
                                    <FaGraduationCap className='text-2xl mr-1' />এডমিশন
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <BannerCard />
        </>
    )
}

export default BannerSection

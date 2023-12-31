import axios from 'axios';
import { Button } from 'flowbite-react';
import React, { useEffect, useState } from 'react'
import { FaGraduationCap } from 'react-icons/fa6';
import BannerCard from './BannerCard';
import { Link } from 'react-router-dom';

function BannerSection() {
    let prevIndex = 0;
    const [imageUrls, setImageUrls] = useState([]);
    const [currentImageIndex, setCurrentImageIndex] = useState(prevIndex);
    useEffect(() => {
        const updateImage = () => {
            prevIndex = prevIndex + 1;
            setCurrentImageIndex(prevIndex % imageUrls.length)
        };

        const interval = setInterval(updateImage, 5000);

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
        <div className='w-full relative'>
            <img className='h-[400px] lg:h-[543px]' src={imageUrls[currentImageIndex]?.bannerImg} alt="" />
            <div className="h-full w-full bg-gradient-to-r from-[rgba(255,255,255,1)] to-transparent absolute top-0 left-0">
                <div className="lg-container h-full w-full flex flex-col lg:justify-center items-center lg:items-start translate-y-20 lg:-translate-y-20 ">
                    <h1 className='text-[#1B2637] text-3xl lg:text-[42px] lg:w-[60%] text-center lg:text-left font-bold'><span className='text-[#2A76E7] leading-snug'>সাইক</span> ইনস্টিটিউট অব মেনেজমেন্ট এন্ড টেকনোলজি </h1>
                    <p className='text-xl mt-2'>Best Polytechnic Institute In Dhaka</p>                    
                    <Link to={'/admission'}>
                        <button className='bg-primary hover:bg-blue-700 txt-white mt-10 px-5 py-3 rounded-md flex items-center transition-colors duration-100'>
                            <FaGraduationCap className='text-2xl mr-1' />এডমিশন
                        </button>
                    </Link>
                </div>
            </div>
            <BannerCard />
        </div>
    )
}

export default BannerSection

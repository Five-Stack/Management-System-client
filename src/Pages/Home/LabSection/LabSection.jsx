import Title from '../../../Components/SharedComponents/Title/Title'
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

import 'swiper/css';
import 'swiper/css/pagination';

import './labSection.css'

import { Navigation, Pagination, History, Autoplay } from 'swiper/modules';
import { useEffect, useState } from 'react';
import axios from 'axios';
import LabCard from './LabCard';


function LabSection() {
    const [labsData, setLabData] = useState([]);

    const large = window.innerWidth;

    useEffect(() => {
        axios.get('https://management-system-server.vercel.app/api/labs')
            .then(data => setLabData(data.data))
    }, [])


    return (
        <div className='lg-container'>
            <Title text="আমাদের শ্রেণীকক্ষ  ও ল্যাব সমূহ " />
            <div>
                <Swiper
                    slidesPerView={large > 768 ? 3 : 1}
                    spaceBetween={50}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    }}
                    pagination={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    history={{
                        key: 'slide',
                    }}
                    modules={[Autoplay,Navigation, Pagination, History]}
                    className="mySwiper relative"
                >
                    {
                        labsData?.map(item => <SwiperSlide key={item?._id} data-history="1">
                            <LabCard data={item} />
                        </SwiperSlide>)
                    }
                    <div className="flex items-center gap-4 text-xl text-white absolute bottom-0 right-[5%]">
                        <span className='bg-[#115ED0] p-2 rounded-full swiper-button-prev cursor-pointer z-20'><FaAngleLeft /></span>
                        <span className='bg-[#115ED0] p-2 rounded-full swiper-button-next cursor-pointer z-20'><FaAngleRight /></span>
                    </div>
                </Swiper>
            </div>
        </div >
    )
}

export default LabSection

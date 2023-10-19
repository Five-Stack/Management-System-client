
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Navigation, Pagination, History, Autoplay } from 'swiper/modules';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Title from '../../../Components/SharedComponents/Title/Title';
import TeacherCard from './TeacherCard';

function TeacherSection() {
    const [labsData, setLabData] = useState([]);

    const large = window.innerWidth;

    useEffect(() => {
        axios.get('https://management-system-server.vercel.app/api/teachers')
            .then(data => setLabData(data.data))
    }, [])

    return (
        <div className='lg-container px-1'>
            <Title text="পরিচালক ও সকল শিক্ষখ বৃন্দ্র " />
            <div>
                <Swiper
                    slidesPerView={large > 768 ? 4 : 1}
                    spaceBetween={50}
                    pagination={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    history={{
                        key: 'slide',
                    }}
                    modules={[Autoplay, Navigation, Pagination, History]}
                    className="mySwiper mt-12"
                >
                    {
                        labsData?.map(item => <SwiperSlide className='mt-8 lg:ml-2' key={item?._id} data-history="1">
                            <TeacherCard data={item}/>
                        </SwiperSlide>)
                    }
                </Swiper>
            </div>
        </div >
    )
}

export default TeacherSection

import React, { useEffect, useState } from 'react';
import DepartmentCard from './DepartmentCard';
import Title from '../../../Components/SharedComponents/Title/Title';

const Department = () => {
    const [showAll, setShowAll] = useState(false)
    const [departments, setDepartments] = useState([]);
    const displayedItems = showAll ? departments : departments.slice(0, 8);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://management-system-server.vercel.app/api/departments');
                const data = await response.json();
                setDepartments(data)
            } catch (error) {
                console.error('Error:', error);
            }
        };
        fetchData()

    }, [])

    return (
        <div className='lg-container'>
            <Title
                text='ডিপার্টমেন্ট সমূহ'
            ></Title>
            <div className={`grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-4`}>
                {
                    displayedItems.map((departmentData, index) => <DepartmentCard
                        key={departmentData._id}
                        departmentData={departmentData}  
                        showAll={showAll}
                        index={index}
                    ></DepartmentCard>)
                }
            </div>
            <div className='mt-10 text-center'>
                {showAll ?
                    <button onClick={() => setShowAll(false)} className='text-sm md:text-base tracking-tighter bg-primary  py-3 px-4 txt-white rounded-md hover:shadow-lg transition-shadow duration-200'>মিনিমাইজ করুন</button> :
                    <button onClick={() => setShowAll(true)} className='text-sm md:text-base tracking-tighter bg-primary py-3 px-4 txt-white rounded-md hover:shadow-lg transition-shadow duration-200'>আরো দেখুন</button>
                }

            </div>
        </div>
    );
};

export default Department;
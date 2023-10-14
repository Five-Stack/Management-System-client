import React from 'react';

const DepartmentCard = ({ departmentData, showAll,index }) => {
    const { departmentName, departmentImg, departmentInfo, admissionEligibility, Workplaces } = departmentData;    
    return (
        <div className={`flex justify-center ${index > 7 && showAll && 'fade-in'} `}>

            <div className="max-w-[262px] h-[220px] md:h-[300px] bg-white border rounded-xl shadow-md shadow-[#2A76E7] hover:shadow-xl hover:shadow-[#2A76E7] transition-shadow duration-150 p-1 md:p-2">

                <img className="rounded-t-xl md:w-[245px] h-[120px] md:h-[179px]" src={departmentImg} alt="" />

                <div className="text-center pt-8">
                    <h5 className="md:text-2xl font-semibold tracking-tight txt-black dark:text-white">{departmentName}</h5>
                </div>

            </div>

        </div>
    );
};

export default DepartmentCard;
import React, { useState } from 'react';
import YearOption from './YearOption';


const Admission = () => {
   
    return (
        <div className='lg-container'>

            <div className='max-w-6xl mx-auto bg-white my-16 px-28 py-20'>
                <h3 className='font-medium text-3xl text-center pb-10'>এডমিশন</h3>
                <form>
                    <div className='grid grid-cols-2 gap-x-3 gap-y-10'>
                        <div>
                            <label className="block mb-2 text-sm txt-blue font-medium dark:text-white">টেকনোলজির নাম *</label>
                            <select id="countries" className="bg-[#D9D9D952] border-2 focus:border border-opacity-60 border-blue-500 text-gray-500 text-sm rounded-lg block w-full p-2.5">
                                <option selected disabled>টেকনোলজি নির্বাচন করুন</option>
                                <option value="Computer Science">Computer Science</option>
                                <option value="Civil">Civil</option>
                                <option value="Electrical">Electrical</option>
                                <option value="Mechanical">Mechanical</option>
                                <option value="Electronics">Electronics</option>
                                <option value="Architecture">Architecture</option>
                                <option value="Telecommunication">Telecommunication</option>
                                <option value="Automobile">Automobile</option>  
                                <option value="Marine Technology">Marine Technology</option>
                                <option value="Shipbuilding Technology">Shipbuilding Technology</option>
                            </select>                                   
                        </div>
                        <div>
                            <label className="block mb-2 text-sm txt-blue font-medium dark:text-white">আবেদনকারীর নাম *</label>
                            <input type="text" id="first_name" className="bg-[#D9D9D952] border-2 focus:border border-opacity-60 border-blue-500 text-gray-500 text-sm rounded-lg block w-full p-2.5" placeholder="আবেদনকারীর নাম লিখুন" required />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm txt-blue font-medium dark:text-white">পিতার নাম *</label>
                            <input type="text" id="first_name" className="bg-[#D9D9D952] border-2 focus:border border-opacity-60 border-blue-500 text-gray-500 text-sm rounded-lg block w-full p-2.5" placeholder="পিতার নাম লিখুন" required />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm txt-blue font-medium dark:text-white">মাতার নাম *</label>
                            <input type="text" id="first_name" className="bg-[#D9D9D952] border-2 focus:border border-opacity-60 border-blue-500 text-gray-500 text-sm rounded-lg block w-full p-2.5" placeholder="মাতার নাম লিখুন " required />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm txt-blue font-medium dark:text-white">জন্মতারিখ *</label>
                            <input type="date" id="first_name" className="bg-[#D9D9D952] border-2 focus:border border-opacity-60 border-blue-500 text-gray-500 text-sm rounded-lg block w-full p-2.5" placeholder="" required />
                            
                        </div>
                        <div>
                            <label className="block mb-2 text-sm txt-blue font-medium dark:text-white">ইমেইল</label>
                            <input type="email" id="first_name" className="bg-[#D9D9D952] border-2 focus:border border-opacity-60 border-blue-500 text-gray-500 text-sm rounded-lg block w-full p-2.5" placeholder="ইমেইল লিখুন" required />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm txt-blue font-medium dark:text-white">ফোন নাম্বার *</label>
                            <input type="number" id="myNumberInput" className="bg-[#D9D9D952] border-2 focus:border border-opacity-60 border-blue-500 text-gray-500 text-sm rounded-lg block w-full p-2.5" placeholder="ফোন নাম্বার  লিখুন" required />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm txt-blue font-medium dark:text-white">ঠিকানা *</label>
                            <input type="text" id="first_name" className="bg-[#D9D9D952] border-2 focus:border border-opacity-60 border-blue-500 text-gray-500 text-sm rounded-lg block w-full p-2.5" placeholder="ঠিকানা লিখুন" required />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm txt-blue font-medium dark:text-white">পরীক্ষার নাম *</label>
                            <select id="countries" className="bg-[#D9D9D952] border-2 focus:border border-opacity-60 border-blue-500 text-gray-500 text-sm rounded-lg block w-full p-2.5">
                                <option selected disabled>পরীক্ষার নাম নির্বাচন করুন</option>
                                <option value="HSC">HSC</option>
                                <option value="SSC">SSC</option>
                                <option value="Dakhil">Dakhil</option>
                                <option value="HSC(Vocational)">HSC(Vocational)</option>
                                <option value="SSC(Vocational)">SSC(Vocational)</option>
                            </select>
                        </div>
                        <div>
                            <label className="block mb-2 text-sm txt-blue font-medium dark:text-white">গ্রুপ / সাবজেক্ট  *</label>
                            <select id="countries" className="bg-[#D9D9D952] border-2 focus:border border-opacity-60 border-blue-500 text-gray-500 text-sm rounded-lg block w-full p-2.5">
                                <option selected disabled>গ্রুপ / সাবজেক্ট নির্বাচন করুন</option>
                                <option value="Science">Science</option>
                                <option value="Commerce">Commerce</option>
                                <option value="Arts">Arts</option>                                
                            </select>
                        </div>
                        <div>
                            <label className="block mb-2 text-sm txt-blue font-medium dark:text-white">পাশের সন *</label>
                            <select id="countries" className="bg-[#D9D9D952] border-2 focus:border border-opacity-60 border-blue-500 text-gray-500 text-sm rounded-lg block w-full p-2.5">
                                <option selected disabled>পাশের সন নির্বাচন করুন</option>                                                            
                                <YearOption
                                    startYear='1996'
                                    endYear='2023'
                                />                                                    
                            </select>
                        </div>
                        <div>
                            <label className="block mb-2 text-sm txt-blue font-medium dark:text-white">বোর্ড *</label>
                            <select id="countries" className="bg-[#D9D9D952] border-2 focus:border border-opacity-60 border-blue-500 text-gray-500 text-sm rounded-lg block w-full p-2.5">
                                <option selected disabled>বোর্ড নির্বাচন করুন</option>
                                <option value="Barisal">Barisal</option>
                                <option value="Chattogram">Chattogram</option>
                                <option value="Cumilla">Cumilla</option>
                                <option value="Dinajpur">Dinajpur</option>
                                <option value="Jashore">Jashore</option>
                                <option value="Mymensingh">Mymensingh</option>
                                <option value="Rajshahi">Rajshahi</option>
                                <option value="Sylhet">Sylhet</option>
                            </select>                            
                        </div>
                        <div className='col-span-2'>
                            <label className="block mb-2 text-sm txt-blue font-medium dark:text-white">শ্রেণী/বিভাগ/গ্রেড *</label>
                            <input type="text" id="first_name" className="bg-[#D9D9D952] border-2 focus:border border-opacity-60 border-blue-500 text-gray-500 text-sm rounded-lg block w-full p-2.5" placeholder="----------" required />
                        </div>
                    </div>
                    <div className='text-right mt-8 pr-1'>
                        <button type='submit' className='text-sm bg-primary txt-white px-6 py-2 rounded-md'>জমা দিন</button>
                    </div>
                </form>
            </div>

        </div>
    );
};
export default Admission;
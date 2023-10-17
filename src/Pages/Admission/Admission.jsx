import React, { useState } from 'react';


const Admission = () => {
   
    return (
        <div className='lg-container'>

            <div className='max-w-6xl mx-auto bg-white my-16 px-28 py-20'>
                <h3 className='font-medium text-3xl text-center pb-10'>এডমিশন</h3>
                <form>
                    <div className='grid grid-cols-2 gap-x-3 gap-y-10'>
                        <div>
                            <label className="block mb-2 text-sm txt-blue font-medium dark:text-white">টেকনোলজির নাম *</label>
                            <select id="countries" className="bg-[#D9D9D952] border-2 focus:border border-opacity-60 border-blue-500 text-gray-900 text-sm rounded-lg block w-full p-2.5">
                                <option selected disabled>Choose a country</option>
                                <option value="US">United States</option>
                                <option value="CA">Canada</option>
                                <option value="FR">France</option>
                                <option value="DE">Germany</option>
                            </select>
                        </div>
                        <div>
                            <label className="block mb-2 text-sm txt-blue font-medium dark:text-white">আবেদনকারীর নাম *</label>
                            <input type="text" id="first_name" className="bg-[#D9D9D952] border-2 focus:border border-opacity-60 border-blue-500 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="আবেদনকারীর নাম লিখুন" required />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm txt-blue font-medium dark:text-white">পিতার নাম *</label>
                            <input type="text" id="first_name" className="bg-[#D9D9D952] border-2 focus:border border-opacity-60 border-blue-500 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="পিতার নাম লিখুন" required />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm txt-blue font-medium dark:text-white">মাতার নাম *</label>
                            <input type="text" id="first_name" className="bg-[#D9D9D952] border-2 focus:border border-opacity-60 border-blue-500 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="মাতার নাম লিখুন " required />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm txt-blue font-medium dark:text-white">জন্মতারিখ *</label>
                            <input type="date" id="first_name" className="bg-[#D9D9D952] border-2 focus:border border-opacity-60 border-blue-500 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="" required />
                            
                        </div>
                        <div>
                            <label className="block mb-2 text-sm txt-blue font-medium dark:text-white">ইমেইল</label>
                            <input type="text" id="first_name" className="bg-[#D9D9D952] border-2 focus:border border-opacity-60 border-blue-500 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="ইমেইল লিখুন" required />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm txt-blue font-medium dark:text-white">ফোন নাম্বার *</label>
                            <input type="text" id="first_name" className="bg-[#D9D9D952] border-2 focus:border border-opacity-60 border-blue-500 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="ফোন নাম্বার  লিখুন" required />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm txt-blue font-medium dark:text-white">ঠিকানা *</label>
                            <input type="text" id="first_name" className="bg-[#D9D9D952] border-2 focus:border border-opacity-60 border-blue-500 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="ঠিকানা লিখুন" required />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm txt-blue font-medium dark:text-white">পরীক্ষার নাম *</label>
                            <select id="countries" className="bg-[#D9D9D952] border-2 focus:border border-opacity-60 border-blue-500 text-gray-900 text-sm rounded-lg block w-full p-2.5">
                                <option defaultValue>Choose a country</option>
                                <option value="US">United States</option>
                                <option value="CA">Canada</option>
                                <option value="FR">France</option>
                                <option value="DE">Germany</option>
                            </select>
                        </div>
                        <div>
                            <label className="block mb-2 text-sm txt-blue font-medium dark:text-white">গ্রুপ / সাবজেক্ট  *</label>
                            <select id="countries" className="bg-[#D9D9D952] border-2 focus:border border-opacity-60 border-blue-500 text-gray-900 text-sm rounded-lg block w-full p-2.5">
                                <option defaultValue>Choose a country</option>
                                <option value="US">United States</option>
                                <option value="CA">Canada</option>
                                <option value="FR">France</option>
                                <option value="DE">Germany</option>
                            </select>
                        </div>
                        <div>
                            <label className="block mb-2 text-sm txt-blue font-medium dark:text-white">পাসের সন *</label>
                            <select id="countries" className="bg-[#D9D9D952] border-2 focus:border border-opacity-60 border-blue-500 text-gray-900 text-sm rounded-lg block w-full p-2.5">
                                <option defaultValue>Choose a country</option>
                                <option value="US">United States</option>
                                <option value="CA">Canada</option>
                                <option value="FR">France</option>
                                <option value="DE">Germany</option>
                            </select>
                        </div>
                        <div>
                            <label className="block mb-2 text-sm txt-blue font-medium dark:text-white">শ্রেণী/বিভাগ/গ্রেড *</label>
                            <input type="text" id="first_name" className="bg-[#D9D9D952] border-2 focus:border border-opacity-60 border-blue-500 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="John" required />
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
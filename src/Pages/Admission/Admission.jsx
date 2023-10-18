import React, { useState } from 'react';
import YearOption from './YearOption';
import { useForm } from 'react-hook-form';
import Alert from './Alert';



const Admission = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => console.log(data)

    return (
        <div className='lg-container'>
            <Alert />

            <div className='max-w-6xl mx-auto bg-white my-16 px-28 py-20'>
                <h3 className='font-medium text-3xl text-center pb-10'>এডমিশন</h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='grid grid-cols-2 gap-x-4 gap-y-10'>
                        <div className='relative'>
                            <label className="block mb-2 text-sm txt-blue font-medium dark:text-white">টেকনোলজির নাম *</label>
                            <select {...register('technologyName', { required: true })} id="countries" className="bg-[#D9D9D952] border-2 focus:border border-opacity-60 border-blue-500 text-gray-500 text-sm rounded-lg block w-full p-2.5">
                                <option selected disabled value=''>টেকনোলজি নির্বাচন করুন</option>
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
                            {errors.technologyName && <span className='absolute -bottom-6 left-1 text-sm text-red-500'>Field Required *</span>}        
                        </div>
                        <div className='relative'>
                            <label className="block mb-2 text-sm txt-blue font-medium dark:text-white">আবেদনকারীর নাম *</label>
                            <input {...register('name', { required: true })} type="text" id="first_name" className="bg-[#D9D9D952] border-2 focus:border border-opacity-60 border-blue-500 text-gray-500 text-sm rounded-lg block w-full p-2.5" placeholder="আবেদনকারীর নাম লিখুন"  />
                            {errors.name && <span className='absolute -bottom-6 left-1 text-sm text-red-500'>Field Required *</span>}
                        </div>
                        <div className='relative'>
                            <label className="block mb-2 text-sm txt-blue font-medium dark:text-white">পিতার নাম *</label>
                            <input {...register('fatherName',{required:true})} type="text" id="first_name" className="bg-[#D9D9D952] border-2 focus:border border-opacity-60 border-blue-500 text-gray-500 text-sm rounded-lg block w-full p-2.5" placeholder="পিতার নাম লিখুন"  />
                            {errors.fatherName && <span className='absolute -bottom-6 left-1 text-sm text-red-500'>Field Required *</span>}
                        </div>
                        <div className='relative'>
                            <label className="block mb-2 text-sm txt-blue font-medium dark:text-white">মাতার নাম *</label>
                            <input {...register('motherName',{required:true})} type="text" id="first_name" className="bg-[#D9D9D952] border-2 focus:border border-opacity-60 border-blue-500 text-gray-500 text-sm rounded-lg block w-full p-2.5" placeholder="মাতার নাম লিখুন "  />
                            {errors.motherName && <span className='absolute -bottom-6 left-1 text-sm text-red-500'>Field Required *</span>}
                        </div>
                        <div className='relative'>
                            <label className="block mb-2 text-sm txt-blue font-medium dark:text-white">জন্মতারিখ *</label>
                            <input {...register('date',{required:true})} type="date" id="first_name" className="bg-[#D9D9D952] border-2 focus:border border-opacity-60 border-blue-500 text-gray-500 text-sm rounded-lg block w-full p-2.5" placeholder=""  />

                            {errors.date && <span className='absolute -bottom-6 left-1 text-sm text-red-500'>Field Required *</span>}
                        </div>
                        <div className='relative'>
                            <label className="block mb-2 text-sm txt-blue font-medium dark:text-white">ইমেইল</label>
                            <input {...register('email')} type="email" id="first_name" className="bg-[#D9D9D952] border-2 focus:border border-opacity-60 border-blue-500 text-gray-500 text-sm rounded-lg block w-full p-2.5" placeholder="ইমেইল লিখুন"  />
                            {errors.email && <span className='absolute -bottom-6 left-1 text-sm text-red-500'>Field Required *</span>}
                        </div>
                        <div className='relative'>
                            <label className="block mb-2 text-sm txt-blue font-medium dark:text-white">ফোন নাম্বার *</label>
                            <input {...register('phoneNumber', { required: true, pattern: /^\d+$/ })} type="text" id="myNumberInput" className="bg-[#D9D9D952] border-2 focus:border border-opacity-60 border-blue-500 text-gray-500 text-sm rounded-lg block w-full p-2.5" placeholder="ফোন নাম্বার  লিখুন" />
                            {errors.phoneNumber?.type === 'required' && <span className='absolute -bottom-6 left-1 text-sm text-red-500'>Field Required *</span>}
                            {errors.phoneNumber?.type === 'pattern' && <span className='absolute -bottom-6 left-1 text-sm text-red-500'>Only number are accepted *</span>}
                            
                        </div>
                        <div className='relative'>
                            <label className="block mb-2 text-sm txt-blue font-medium dark:text-white">ঠিকানা *</label>
                            <input {...register('address',{required:true})} type="text" id="first_name" className="bg-[#D9D9D952] border-2 focus:border border-opacity-60 border-blue-500 text-gray-500 text-sm rounded-lg block w-full p-2.5" placeholder="ঠিকানা লিখুন"  />
                            {errors.address && <span className='absolute -bottom-6 left-1 text-sm text-red-500'>Field Required *</span>}
                        </div>
                        <div className='relative'>
                            <label className="block mb-2 text-sm txt-blue font-medium dark:text-white">পরীক্ষার নাম *</label>
                            <select {...register('examName',{required:true})} id="countries" className="bg-[#D9D9D952] border-2 focus:border border-opacity-60 border-blue-500 text-gray-500 text-sm rounded-lg block w-full p-2.5">
                                <option selected disabled value=''>পরীক্ষার নাম নির্বাচন করুন</option>
                                <option value="HSC">HSC</option>
                                <option value="SSC">SSC</option>
                                <option value="Dakhil">Dakhil</option>
                                <option value="HSC(Vocational)">HSC(Vocational)</option>
                                <option value="SSC(Vocational)">SSC(Vocational)</option>
                            </select>
                            {errors.examName && <span className='absolute -bottom-6 left-1 text-sm text-red-500'>Field Required *</span>}
                        </div>
                        <div className='relative'>
                            <label className="block mb-2 text-sm txt-blue font-medium dark:text-white">গ্রুপ / সাবজেক্ট  *</label>
                            <select {...register('group',{required:true})} id="countries" className="bg-[#D9D9D952] border-2 focus:border border-opacity-60 border-blue-500 text-gray-500 text-sm rounded-lg block w-full p-2.5">
                                <option selected disabled value=''>গ্রুপ / সাবজেক্ট নির্বাচন করুন</option>
                                <option value="Science">Science</option>
                                <option value="Commerce">Commerce</option>
                                <option value="Arts">Arts</option>
                            </select>
                            {errors.group && <span className='absolute -bottom-6 left-1 text-sm text-red-500'>Field Required *</span>}
                        </div>
                        <div className='relative'>
                            <label className="block mb-2 text-sm txt-blue font-medium dark:text-white">পাশের সন *</label>
                            <select {...register('passingYear',{required:true})} id="countries" className="bg-[#D9D9D952] border-2 focus:border border-opacity-60 border-blue-500 text-gray-500 text-sm rounded-lg block w-full p-2.5">
                                <option selected disabled value=''>পাশের সন নির্বাচন করুন</option>
                                <YearOption                                
                                    startYear='1996'
                                    endYear='2023'
                                />
                            </select>
                            {errors.passingYear && <span className='absolute -bottom-6 left-1 text-sm text-red-500'>Field Required *</span>}
                        </div>
                        <div className='relative'>
                            <label className="block mb-2 text-sm txt-blue font-medium dark:text-white">বোর্ড *</label>
                            <select {...register('board',{required:true})} id="countries" className="bg-[#D9D9D952] border-2 focus:border border-opacity-60 border-blue-500 text-gray-500 text-sm rounded-lg block w-full p-2.5">
                                <option selected disabled value=''>বোর্ড নির্বাচন করুন</option>
                                <option value="Barisal">Barisal</option>
                                <option value="Chattogram">Chattogram</option>
                                <option value="Cumilla">Cumilla</option>
                                <option value="Cumilla">Dhaka</option>
                                <option value="Dinajpur">Dinajpur</option>
                                <option value="Jashore">Jashore</option>
                                <option value="Mymensingh">Mymensingh</option>
                                <option value="Rajshahi">Rajshahi</option>
                                <option value="Sylhet">Sylhet</option>
                            </select>
                            {errors.board && <span className='absolute -bottom-6 left-1 text-sm text-red-500'>Field Required *</span>}
                        </div>
                        <div className='relative col-span-2'>
                            <label className="block mb-2 text-sm txt-blue font-medium dark:text-white">শ্রেণী/বিভাগ/গ্রেড *</label>
                            <input {...register('grade',{required:true})} type="text" id="first_name" className="bg-[#D9D9D952] border-2 focus:border border-opacity-60 border-blue-500 text-gray-500 text-sm rounded-lg block w-full p-2.5" placeholder="----------"  />
                            {errors.grade && <span className='absolute -bottom-6 left-1 text-sm text-red-500'>Field Required *</span>}
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
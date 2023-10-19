import { useForm } from "react-hook-form";
import logo from '../../assets/logo.png'
import img1 from '../../assets/boy_with_book.png'
import { Link } from "react-router-dom";


const Registration = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => console.log(data);

    return (
        <div className='lg-container px-2 fade-in'>
            <div className='md:flex my-20 md:h-[590px]'>

                {/* Registration page left side design */}
                <div className="basis-[60%] bg-[#dfebf4] text-center relative overflow-hidden z-10 rounded-l-xl hidden md:block">
                    <div className="mt-16">
                        <div className='pt-10 z-30'>
                            <figure className='flex justify-center mb-8'>
                                <img src={logo} alt="saic-logo" />
                            </figure>
                            <h3 className=' text-3xl leading-normal font-extrabold tracking-tight'><span className='text-[#115ED0]'>সাইক ইনস্টিটিউট</span> <span className='txt-black'>অব ম্যানেজমেন্ট<br />অ্যান্ড টেকনোলজিতে</span></h3>
                            <p className='text-[#F71E52] text-xl font-bold'>আপনাকে স্বাগতম</p>
                        </div>
                    </div>

                    <div className='w-[650px] h-[340px] bg-[#d3e4f5] rounded-[50%] rotate-45 absolute top-[50%] right-[35%] -z-10'></div>

                    <figure className='absolute bottom-0 left-0'>
                        <img src={img1} alt="" />
                    </figure>
                </div>
                {/* Registration page left side design end */}


                {/* Registration page right side design */}
                <div className="lg:w-1/2 bg-white pt-12 pb-12 md:pb-0 px-10 rounded-xl md:rounded-l-none md:rounded-r-xl">
                    <h3 className='text-3xl font-bold mb-8'>রেজিস্টেশন</h3>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* user name input */}
                        <div className='mb-7 relative'>
                            <label className="block mb-2 text-sm txt-blue font-medium dark:text-white">ইউজার নেম *</label>
                            <input {...register('userName', { required: true })}
                                type="text"
                                className="bg-[#D9D9D952] border-2 focus:border border-opacity-60 border-blue-500 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                                placeholder="ইউজারনেম লিখুন" required/>
                            {errors.userName && <span className='absolute -bottom-6 left-1 text-sm text-red-500'>Field Required *</span>}
                        </div>
                        {/* --------------------- */}


                        {/* email input */}
                        <div className='mb-7 relative'>
                            <label className="block mb-2 text-sm txt-blue font-medium dark:text-white">ইমেইল *</label>
                            <input {...register('email', { required: true })}
                                type="email"
                                className="bg-[#D9D9D952] border-2 focus:border border-opacity-60 border-blue-500 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                                placeholder="ইমেইল লিখুন" required/>
                            {errors.email && <span className='absolute -bottom-6 left-1 text-sm text-red-500'>Field Required *</span>}
                        </div>
                        {/* ----------------- */}


                        {/* phone number input */}
                        <div className='mb-7 relative'>
                            <label className="block mb-2 text-sm txt-blue font-medium dark:text-white">ফোন *</label>
                            <input {...register('phoneNumber', { required: true, pattern: /^\d+$/ })}
                                type="text"
                                className="bg-[#D9D9D952] border-2 focus:border border-opacity-60 border-blue-500 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                                placeholder="ফোন নাম্বার লিখুন" required/>
                            {errors.phoneNumber?.type === 'required' && <span className='absolute -bottom-6 left-1 text-sm text-red-500'>Field Required *</span>}
                            {errors.phoneNumber?.type === 'pattern' && <span className='absolute -bottom-6 left-1 text-sm text-red-500'>Only number are accepted *</span>}
                        </div>
                        {/* ----------------- */}


                        {/* student id/board-roll input */}
                        <div className='mb-7 relative'>
                            <label className="block mb-2 text-sm txt-blue font-medium dark:text-white">স্টোডেন্ট আইডি / বোর্ড রোল  *</label>
                            <input {...register('roll', { required: true })}
                                type="text"
                                className="bg-[#D9D9D952] border-2 focus:border border-opacity-60 border-blue-500 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                                placeholder="স্টোডেন্ট আইডি  / বোর্ড রোল  লিখুন " required/>
                            {errors.roll && <span className='absolute -bottom-6 left-1 text-sm text-red-500'>Field Required *</span>}
                        </div>
                        {/* ----------------- */}

                        <div className='flex justify-between items-center mt-7'>
                            <label className="block mt-3 text-sm txt-blue font-medium pr-1 hover:cursor-pointer">have an account?
                                <Link to={'/login'}>
                                    <span className="hover:text-blue-700 hover:underline"> login</span>
                                </Link>
                            </label>
                            <button type='submit' className='text-sm bg-primary txt-white px-6 py-2 md:px-8 md:py-3 rounded-md'>সাবমিট</button>
                        </div>
                    </form>
                </div>
                {/* Registration page right side design end */}

            </div>
        </div>
    );
};

export default Registration;
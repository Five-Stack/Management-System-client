import React, { useRef } from 'react';
import Title from '../../../Components/SharedComponents/Title/Title';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import MapSection from '../MapSection/MapSection';

const ContactUsSection = () => {

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_ajphu8l', 'template_lq680u7', form.current, '4LCcoTEjuj8vHqVdc')
        .then((result) => {

            Swal.fire({
                position: 'top',
                icon: 'success',
                title: 'পাঠানো সফল হয়েছে 😄 !',
                showConfirmButton: false,
                timer: 1500
            })

            form.current.reset();
            console.log(result.text);
        }, (error) => {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Sorry Message Can not Sent!'
            })
            console.log(error.text);
        });
      };



    return (
        <div>
            <div>
                <Title text="যোগাযোগ করুন " />
            </div>
            <div className='flex mx-auto lg-container justify-between items-center '>

                <div> <form ref={form} onSubmit={sendEmail}>
                    <div className="mb-6">
                        <label htmlFor="text" className="block mb-2 text-sm font-medium text-blue-500 dark:text-white">আপনার নাম</label>
                        <input type="text" id="text" name="user_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[500px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="নাম লিখুন " required />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-blue-500 dark:text-white">আপনার  ইমেইল </label>
                        <input type="email" id="email" name="user_email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[500px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="ইমেইল লিখুন " required />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="text" className="block mb-2 text-sm font-medium text-blue-500 dark:text-white">আপনার বার্তা</label>
                        <input type="text" id="text" name="message" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[500px] h-[100px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="বার্তা লিখুন " required />
                    </div>
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">সাবমিট</button>
                </form>
                </div>




                <div>
<MapSection/>

                    {/* <form >
                        <label>Name</label>
                        <input type="text" name="user_name" />
                        <label>Email</label>
                        <input type="email" name="user_email" />
                        <label>Message</label>
                        <textarea name="message" />
                        <input type="submit" value="Send" />
                    </form> */}



                </div>

            </div>
        </div>
    );
};

export default ContactUsSection;
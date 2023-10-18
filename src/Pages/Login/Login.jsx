import logo from '../../assets/logo.png'

const Login = () => {
    return (
        <div className='lg-container'>
            <div className="w-1/2 h-[450px] bg-[#dfebf4] text-center">
                <img src={logo} alt="saic-logo"/>
                <h3 className=' text-3xl leading-normal font-bold'><span className='text-[#115ED0]'>সাইক ইনস্টিটিউট</span> <span className='txt-black'>অব ম্যানেজমেন্ট<br />অ্যান্ড টেকনোলজিতে</span></h3>
                <p className='text-[#F71E52] text-xl font-bold'>আপনাকে স্বাগতম</p>

            </div>
        </div>
    );
};

export default Login;
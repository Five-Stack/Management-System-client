import React from 'react';

const Title = ({ text}) => {
    const title = text.split(' ');
    if (title.length > 3) {
        title.splice(3, 0, '\n')
    }
    const text1 = title[0];
    const text2 = title.slice(1).join(' ');  
   
    return (
        <div className='py-8 md:py-16 text-center relative z-10'>
            <pre className='tracking-tight leading-snug font-semibold text-xl md:text-3xl'><span className='txt-blue'>{text1}</span> <span className='txt-black'>{text2}</span></pre>
            <div className='-z-10 w-20 h-10 md:w-28 md:h-12 bg-[#2a76e78c] rounded-2xl blur-xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>

            </div>
        </div>
    );
};

export default Title;
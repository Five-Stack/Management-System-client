import Title from "../../../Components/SharedComponents/Title/Title"

function BenefitsSection() {

    const list = [
        {
            name: "সিসি ক্যামেরার দ্বারা ক্লাস পর্যবেক্ষণ করা হয়।",
            img:"https://i.ibb.co/CbDqSQD/003-webcam-1.png"
        },
        {
            name: "অনুপস্থিত মেসেজ পাঠানো হবে",
            img:"https://i.ibb.co/S5zTTp6/004-message-1.png"
        },
        {
            name: "প্রজেক্টরের মাধ্যমে ক্লাস নেওয়া হবে।",
            img:"https://i.ibb.co/FnBmKTR/005-projector-1.png"
        },
        {
            name: "অনলাইনে রেজাল্ট দেখার সুবিধা",
            img:"https://i.ibb.co/R0J4HCs/001-homework-1.png"
        },
        {
            name: "উন্নত মানের শিক্ষা ব্যবস্থা দেওয়া হবে",
            img:"https://i.ibb.co/PD18jtv/002-result-1.png"
        },
        {
            name: "পরীক্ষার মাধ্যমে শিক্ষার মান যাচাই",
            img:"https://i.ibb.co/r3jTcmp/006-ranking-1.png"
        }
    ];

  return (
    <div className="bg-[#F2F2F2] pb-20">
      <Title text="আমাদের সুবিধা সমূহ"/>
      <div className=" lg-container flex flex-col md:flex-row items-center justify-center gap-6">
        <div className="basis-1/2 grid grid-cols-2 md:grid-cols-3 items-center gap-4">
            {
                list.map((item, index) => 
                    <div key={index} className="px-3 py-6 rounded-md bg-white transition-all ease-in-out delay-200 hover:bg-[#115ED0] hover:text-white cursor-pointer shadow-md flex flex-col items-center gap-3 text-center">
                        <img src={item?.img} />
                        <p>{item?.name}</p>
                    </div>
                )
            }
        </div>
        <div className="basis-1/2 h-full bg-[rgba(217,217,217,0.28)] flex flex-col items-center text-center gap-6 py-[112px]">
            <h3 className="text-2xl px-24 text-[#2A3656] font-bold">সিসি ক্যামেরার দ্বারা ক্লাস পর্যবেক্ষণ করা হয়।</h3>
            <p className="text-[#454545] text-[14px]">সর্বক্ষণ প্রত্যেক শ্রেণিকক্ষে সিসি ক্যামেরা দ্বারা ক্লাস পর্যবেক্ষণ করা হয়।</p>
        </div>
      </div>
    </div>
  )
}

export default BenefitsSection

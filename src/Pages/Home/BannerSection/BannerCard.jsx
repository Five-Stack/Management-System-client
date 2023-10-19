

function BannerCard() {
    // 
    const cards = [
        {
            image: "https://i.ibb.co/nLb2Cb0/teacher.png",
            name: "শিক্ষক",
            number: '৪০'
        },
        {
            image: "https://i.ibb.co/ZM03fL4/graduation-3902189.png",
            name: "A+ শিক্ষার্থী",
            number: '২০০'
        },
        {
            image: "https://i.ibb.co/pn2H4CZ/cheer-up-5435714.png",
            name: "শিক্ষার্থী",
            number: '৪০০'
        }
    ]
    return (
        <div className="lg:w-[60%] bg-[#115ED0] p-8 relative left-1/2 -translate-x-1/2 bottom-5 lg:bottom-12 lg:rounded-lg shadow-md grid md:grid-cols-2 lg:grid-cols-3 items-center gap-6">
            {
                cards.map((item, index) =>
                    <div key={index} className="p-2 bg-[rgba(217,217,217,0.27)] text-white flex items-center gap-2 rounded-md">
                        <img src={item?.image} className="h-20" alt="" />
                        <div>
                            <h1 className="text-3xl mb-1">{item?.number}+</h1>
                            <h1>{item?.name}+</h1>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default BannerCard

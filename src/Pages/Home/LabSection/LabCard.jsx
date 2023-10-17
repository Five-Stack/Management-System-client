
function LabCard({ data }) {
    return (
        <div className="max-h-[350px] w-full p-0 relative ">
            <img src={data?.labImg} className="h-[350px] rounded-md" alt="lab image" />
            <div className="w-full h-full bg-black opacity-50 z-10 absolute top-0 left-0 rounded-md"></div>
            <h1 className="absolute left-1/2 bottom-8 -translate-x-1/2 text-center whitespace-nowrap z-10 text-3xl text-white font-semibold">{data?.labName}</h1>
        </div>
    )
}

export default LabCard
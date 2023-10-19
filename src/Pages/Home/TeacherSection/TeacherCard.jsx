import { FaEnvelope, FaFacebook, FaPhone } from "react-icons/fa6";
import { Link } from "react-router-dom";

function TeacherCard({ data }) {
    const boxs = [1,2,3];
    return (
            <div className="max-h-[350px] w-full mr-6 lg:mr-0 p-12 relative shadow-md rounded-lg">
                <div className="h-full w-full bg-white absolute top-0 left-0 -z-10 rounded-lg"></div>
                <img src={data?.teacherImg} className="h-[180px] w-[400px] rounded-xl" alt="teachers image" />
                <div className="space-x-2 my-4 text-center">
                    <h2 className="text-xl text-[#213956] font-semibold">{data?.teacherName}</h2>
                    <p className="text-[#545353]">{data?.designation}</p>
                </div>
                <div className="flex items-center gap-2 justify-center">
                    <span className="cursor-pointer"><FaPhone /></span>
                    <span className="cursor-pointer"><FaEnvelope /></span>
                    <Link to={data?.facebookUrl} className="cursor-pointer"><FaFacebook /></Link>
                </div>
                {
                    boxs.map((box, index) => <div key={index} className="absolute -top-2 -left-2 -z-20 h-[60px] w-[60px] rounded-xl bg-[#1460D1] hidden lg:block"></div>)
                }
            </div>
    )
}

export default TeacherCard

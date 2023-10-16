import React from 'react'
import Department from '../DepartmentSection/Department'
import LabSection from '../LabSection/LabSection'
import TeacherSection from '../TeacherSection/TeacherSection'

const Home = () => {
  return (
    <>
      <div className='text-center font-bold text-red-400 text-2xl mt-5'>This Is Our Home Page:)</div>
      <Department></Department>
      <LabSection/>
      <TeacherSection/>
    </>
  )
}

export default Home